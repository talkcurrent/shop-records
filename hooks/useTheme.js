import React, { useState } from 'react';

export default function useTheme(mode) {
    const [active, setactive] = useState("dark");

    const theme = {
        light: {
            color: "#404348",
            iconColor: "#217221",//green
            iconBgc: "#e1e1e1",
            barStyle: "dark-content",
            backgroundColor: "white",
            success: "#3c7a3d",
            error: "#cd5c5c",
            outline: "#8bc23c",
            linkColor: "#2196f3",
            grayed: "#777777",
            stackHeaderBgc: "#3c7a3d",
            cardBgc: "white",
            cardGradient: "#a3a3a3",
            listBgc: "white",
            hr: "#dadada",
            fontSize: 12,

        },
        dark: {
            hr: "gray",
            color: "#f5f5f5",
            iconColor: "#009688",
            iconBgc: "#2f2f2f",
            barStyle: "light-content",
            backgroundColor: "#191919",
            success: "#3c7a3d",
            error: "#cd5c5c",
            outline: "#8bc23c",
            linkColor: "#2196f3",
            grayed: "#777777",
            cardBgc: "#444444",
            cardGradient: "#2b2b2b",
            listBgc: "#373737",
            stackHeaderBgc: "#444444",
            fontSize: 12,

        }
    };

    return theme[active];
}
