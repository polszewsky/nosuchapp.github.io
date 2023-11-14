import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export default function RewardDialog({ open, handleClose }) {
  const codes = [
    "133FI-QDMRG-QT7QO",
    "6829P-NC828-E1M9C",
    "65BG7-RG4N4-424JR",
    "A96P7-9RJP7-15I83",
    "PCPN5-2K8O3-P9ODJ",
    "ZC6NF-2AIOP-PD1SJ",
    "12PNN-Z5UOZ-1LIXJ",
    "2FP6L-KK1O2-YFL38",
    "GSP35-CK8OE-JLODJ",
    "CCPN4-YK5OY-K46OJ",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (open) {
      setIndex(Math.floor(Math.random() * 9));
    }
  }, [open]);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Claim reward</DialogTitle>
      <DialogContent>
        <Alert icon={false} severity="success" sx={{ fontSize: "21pt" }}>
          {codes[index]}
        </Alert>
      </DialogContent>
      <DialogActions>
        <Button disableElevation startIcon={<CheckBoxIcon />}>
          Copied to clipboard
        </Button>
      </DialogActions>
    </Dialog>
  );
}
