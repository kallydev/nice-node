import { style } from '@vanilla-extract/css';

// required to export even if not using in a component
export const container = style({});

export const tabsList = style({
  display: 'flex',
  flexDirection: 'row',
  gap: 24,
  height: 28,
  alignItems: 'center',
  padding: '10px 0',
});

export const tabContent = style({
  marginTop: 36,
  selectors: {
    '&.modal': {
      height: '40vh',
      overflow: 'auto',
      // extra padding from scrollbar
      paddingRight: 10,
    },
  },
});
