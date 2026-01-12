import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { ChartDataProvider } from "@mui/x-charts/ChartDataProvider";
import { ChartsSurface } from "@mui/x-charts/ChartsSurface";
import { LinePlot } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import { ChartsTooltip } from "@mui/x-charts/ChartsTooltip";
import { ChartsGrid } from "@mui/x-charts/ChartsGrid";
import { ChartsLegend } from "@mui/x-charts/ChartsLegend";
import { schoolPerformanceData } from "./schoolData";

export default function SchoolPerformanceDashboard() {
  const colors = {
    primary: "#00f2ff",   // Неоновый циан
    secondary: "#ff00ff", // Неоновая маджента
    text: "#ffffff",
    grid: "rgba(255, 255, 255, 0.05)",
    border: "rgba(255, 255, 255, 0.1)",
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, width: "100%", background: "transparent" }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 6 },
          bgcolor: "rgba(10, 10, 10, 0.4)", 
          backdropFilter: "blur(20px)",
          border: "1px solid",
          borderColor: colors.border,
          borderRadius: 10,
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Декоративное свечение на фоне */}
        <Box sx={{ 
          position: "absolute", top: -100, right: -100, 
          width: 300, height: 300, 
          bg: `${colors.primary}10`, filter: "blur(100px)", borderRadius: "50%" 
        }} />

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{ 
              color: colors.text, 
              fontWeight: 900, 
              textTransform: "uppercase", 
              letterSpacing: "-0.02em",
              textShadow: "0 0 20px rgba(255,255,255,0.3)"
            }}
          >
            Academic Analytics
          </Typography>
        </Box>

        <Box sx={{ width: "100%", height: 400 }}>
          <ChartDataProvider
            dataset={schoolPerformanceData}
            series={[
              {
                type: "line",
                dataKey: "avgGpa",
                label: "Average GPA",
                color: colors.primary,
                yAxisId: "gpa-axis",
                showMark: true,
                slotProps: { 
                  line: { 
                    strokeWidth: 4,
                    style: { filter: `drop-shadow(0px 0px 10px ${colors.primary})` }
                  } 
                },
              },
              {
                type: "line",
                dataKey: "attendanceRate",
                label: "Attendance Rate",
                color: colors.secondary,
                yAxisId: "attendance-axis",
                showMark: true,
                slotProps: { 
                  line: { 
                    strokeWidth: 4,
                    style: { filter: `drop-shadow(0px 0px 10px ${colors.secondary})` }
                  } 
                },
              },
            ]}
            xAxis={[
              {
                scaleType: "time",
                dataKey: "date",
                tickLabelStyle: { fill: "rgba(255,255,255,0.5)", fontWeight: 700 },
              },
            ]}
            yAxis={[
              { id: "gpa-axis", scaleType: "linear", position: "left", tickLabelStyle: { fill: colors.primary, fontWeight: 900 } },
              { id: "attendance-axis", scaleType: "linear", position: "right", tickLabelStyle: { fill: colors.secondary, fontWeight: 900 } },
            ]}
          >
            <Box sx={{ display: "flex", mb: 4 }}>
              <ChartsLegend 
                slotProps={{
                  legend: {
                    labelStyle: { fill: "#ffffff", fontSize: 14, fontWeight: 800, textTransform: "uppercase" },
                    itemGap: 30
                  }
                }}
              />
            </Box>

            <ChartsSurface height={400}>
              <ChartsGrid horizontal stroke={colors.grid} />
              <LinePlot />
              <ChartsXAxis />
              <ChartsYAxis axisId="gpa-axis" />
              <ChartsYAxis axisId="attendance-axis" />
            </ChartsSurface>
            <ChartsTooltip trigger="axis" />
          </ChartDataProvider>
        </Box>

        {/* Нижние показатели с жирным шрифтом и неоном */}
        <Box
          sx={{
            mt: 8,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 4,
          }}
        >
          {[
            { label: "Average GPA", value: "3.72", color: colors.primary },
            { label: "Attendance Rate", value: "98.5%", color: colors.secondary },
          ].map((card, i) => (
            <Box key={i} sx={{ 
              p: 3, 
              borderRadius: 4, 
              border: "1px solid", 
              borderColor: `${card.color}20`,
              bg: `${card.color}05`
            }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: card.color, 
                  textTransform: "uppercase", 
                  letterSpacing: 2,
                  fontWeight: 900,
                  display: "block",
                  mb: 1,
                  opacity: 0.7
                }}
              >
                {card.label}
              </Typography>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 950, 
                  color: "#ffffff",
                  letterSpacing: "-0.05em",
                  textShadow: `0 0 15px ${card.color}60`,
                  lineHeight: 1
                }}
              >
                {card.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}