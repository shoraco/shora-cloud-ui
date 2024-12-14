import { Theme } from '@emotion/react';

export interface ShoraTheme extends Theme {
  colors: {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    secondary: string;
    secondaryDark: string;
    secondaryLight: string;
    text: string;
    textSecondary: string;
    background: string;
    backgroundDark: string;
    error: string;
    success: string;
    warning: string;
    info: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeight: {
      tight: number;
      normal: number;
      relaxed: number;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  zIndices: {
    modal: number;
    popover: number;
    tooltip: number;
    toast: number;
  };
}

export const defaultTheme: ShoraTheme = {
  colors: {
    primary: '#2563eb',
    primaryDark: '#1d4ed8',
    primaryLight: '#dbeafe',
    secondary: '#f3f4f6',
    secondaryDark: '#e5e7eb',
    secondaryLight: '#f9fafb',
    text: '#1f2937',
    textSecondary: '#6b7280',
    background: '#ffffff',
    backgroundDark: '#f3f4f6',
    error: '#ef4444',
    success: '#22c55e',
    warning: '#f59e0b',
    info: '#3b82f6',
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem',
    '2xl': '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  zIndices: {
    modal: 1000,
    popover: 900,
    tooltip: 800,
    toast: 700,
  },
};

export const createTheme = (overrides: Partial<ShoraTheme>): ShoraTheme => {
  return {
    ...defaultTheme,
    ...overrides,
    colors: {
      ...defaultTheme.colors,
      ...overrides.colors,
    },
    typography: {
      ...defaultTheme.typography,
      ...overrides.typography,
    },
    spacing: {
      ...defaultTheme.spacing,
      ...overrides.spacing,
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      ...overrides.borderRadius,
    },
    shadows: {
      ...defaultTheme.shadows,
      ...overrides.shadows,
    },
    breakpoints: {
      ...defaultTheme.breakpoints,
      ...overrides.breakpoints,
    },
    zIndices: {
      ...defaultTheme.zIndices,
      ...overrides.zIndices,
    },
  };
};
