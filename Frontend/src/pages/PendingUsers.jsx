import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  CircularProgress,
  Alert,
  Chip,
  Avatar,
} from "@mui/material";
import { CheckCircle, Cancel, HourglassEmpty } from "@mui/icons-material";
import axios from "axios";
import { useSelector } from "react-redux";

const PendingUsers = () => {
  const [pendingUsers, setPendingUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { currentUser } = useSelector((state) => state.user);

  // Fetch pending users
  const fetchPendingUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/users/pending`, {
        headers: {
          token: `Bearer ${currentUser?.accessToken}`,
        },
      });
      setPendingUsers(res.data);
      setError("");
    } catch (err) {
      setError("Failed to load pending users.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser?.role === "admin") {
      fetchPendingUsers();
    }
  }, [currentUser]);

  // Approve User
  const handleApprove = async (userId) => {
    if (window.confirm("Are you sure you want to approve this donor?")) {
      try {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/api/users/approve/${userId}`,
          {},
          {
            headers: { token: `Bearer ${currentUser.accessToken}` },
          }
        );
        setSuccess("Donor approved successfully!");
        fetchPendingUsers();
      } catch (err) {
        setError("Failed to approve user.");
      }
    }
  };

  // Reject & Delete User
  const handleReject = async (userId) => {
    if (window.confirm("Are you sure you want to reject and delete this account?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/users/reject/${userId}`, {
          headers: { token: `Bearer ${currentUser.accessToken}` },
        });
        setSuccess("Account rejected and deleted.");
        fetchPendingUsers();
      } catch (err) {
        setError("Failed to reject user.");
      }
    }

  };

  // Clear messages after 4 seconds
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess("");
        setError("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  if (currentUser?.role !== "admin") {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h5" color="error">
          Access Denied. Admin only.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, minHeight: "100vh", backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" fontWeight="bold" color="#d32f2f" gutterBottom>
        Pending Donor Requests
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Review and approve new donors to join the blood donation network.
      </Typography>

      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", my: 8 }}>
          <CircularProgress size={60} />
        </Box>
      ) : pendingUsers.length === 0 ? (
        <Paper sx={{ p: 6, textAlign: "center", backgroundColor: "#fff" }}>
          <HourglassEmpty sx={{ fontSize: 60, color: "#999" }} />
          <Typography variant="h6" color="text.secondary" mt={2}>
            No pending requests at the moment.
          </Typography>
        </Paper>
      ) : (
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead sx={{ backgroundColor: "#d32f2f" }}>
              <TableRow>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Age</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Gender</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Blood Type</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>City</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pendingUsers.map((user) => (
                <TableRow key={user._id} hover>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar sx={{ bgcolor: "#d32f2f" }}>
                        {user.username?.[0]?.toUpperCase()}
                      </Avatar>
                      <strong>{user.username}</strong>
                    </Box>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.age || "-"}</TableCell>
                  <TableCell>
                    <Chip
                      label={user.gender || "Not specified"}
                      size="small"
                      color={user.gender === "male" ? "primary" : "secondary"}
                    />
                  </TableCell>
                  <TableCell>
                    <Chip label={user.bloodType || "Unknown"} color="error" variant="outlined" />
                  </TableCell>
                  <TableCell>{user.city || "-"}</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      startIcon={<CheckCircle />}
                      onClick={() => handleApprove(user._id)}
                      sx={{ mr: 1 }}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      startIcon={<Cancel />}
                      onClick={() => handleReject(user._id)}
                    >
                      Reject
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default PendingUsers;