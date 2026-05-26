// animations/ringHelpers.ts
import  { interpolate, SharedValue } from 'react-native-reanimated';

type Keyframe = {
  offset: number;
  dasharray: string;
  width: number;
  offsetValue: number;
};

const keyframesA: Keyframe[] = [
  { offset: 0.00, dasharray: '0 660', width: 20, offsetValue: -330 },
  { offset: 0.04, dasharray: '0 660', width: 20, offsetValue: -330 },
  { offset: 0.12, dasharray: '60 600', width: 30, offsetValue: -335 },
  { offset: 0.32, dasharray: '60 600', width: 30, offsetValue: -595 },
  { offset: 0.40, dasharray: '0 660', width: 20, offsetValue: -660 },
  { offset: 0.54, dasharray: '0 660', width: 20, offsetValue: -660 },
  { offset: 0.62, dasharray: '60 600', width: 30, offsetValue: -665 },
  { offset: 0.82, dasharray: '60 600', width: 30, offsetValue: -925 },
  { offset: 0.90, dasharray: '0 660', width: 20, offsetValue: -990 },
  { offset: 1.00, dasharray: '0 660', width: 20, offsetValue: -990 },
];

const keyframesB: Keyframe[] = [
  { offset: 0.00, dasharray: '0 220', width: 20, offsetValue: -110 },
  { offset: 0.12, dasharray: '0 220', width: 20, offsetValue: -110 },
  { offset: 0.20, dasharray: '20 200', width: 30, offsetValue: -115 },
  { offset: 0.40, dasharray: '20 200', width: 30, offsetValue: -195 },
  { offset: 0.48, dasharray: '0 220', width: 20, offsetValue: -220 },
  { offset: 0.62, dasharray: '0 220', width: 20, offsetValue: -220 },
  { offset: 0.70, dasharray: '20 200', width: 30, offsetValue: -225 },
  { offset: 0.90, dasharray: '20 200', width: 30, offsetValue: -305 },
  { offset: 0.98, dasharray: '0 220', width: 20, offsetValue: -330 },
  { offset: 1.00, dasharray: '0 220', width: 20, offsetValue: -330 },
];

const keyframesC: Keyframe[] = [
  { offset: 0.00, dasharray: '0 440', width: 20, offsetValue: 0 },
  { offset: 0.08, dasharray: '40 400', width: 30, offsetValue: -5 },
  { offset: 0.28, dasharray: '40 400', width: 30, offsetValue: -175 },
  { offset: 0.36, dasharray: '0 440', width: 20, offsetValue: -220 },
  { offset: 0.58, dasharray: '0 440', width: 20, offsetValue: -220 },
  { offset: 0.66, dasharray: '40 400', width: 30, offsetValue: -225 },
  { offset: 0.86, dasharray: '40 400', width: 30, offsetValue: -395 },
  { offset: 0.94, dasharray: '0 440', width: 20, offsetValue: -440 },
  { offset: 1.00, dasharray: '0 440', width: 20, offsetValue: -440 },
];

const keyframesD: Keyframe[] = [
  { offset: 0.00, dasharray: '0 440', width: 20, offsetValue: 0 },
  { offset: 0.08, dasharray: '0 440', width: 20, offsetValue: 0 },
  { offset: 0.16, dasharray: '40 400', width: 30, offsetValue: -5 },
  { offset: 0.36, dasharray: '40 400', width: 30, offsetValue: -175 },
  { offset: 0.44, dasharray: '0 440', width: 20, offsetValue: -220 },
  { offset: 0.50, dasharray: '0 440', width: 20, offsetValue: -220 },
  { offset: 0.58, dasharray: '40 400', width: 30, offsetValue: -225 },
  { offset: 0.78, dasharray: '40 400', width: 30, offsetValue: -395 },
  { offset: 0.86, dasharray: '0 440', width: 20, offsetValue: -440 },
  { offset: 1.00, dasharray: '0 440', width: 20, offsetValue: -440 },
];

function createRingAnimation(keyframes: Keyframe[]) {
  return (progress: SharedValue<number>) => {
    'worklet';
    const t = progress.value;
    
    // Trouver le segment actuel
    let i = 0;
    while (i < keyframes.length - 1 && t > keyframes[i + 1].offset) {
      i++;
    }
    
    const from = keyframes[i];
    const to = keyframes[i + 1];
    const segmentProgress = (t - from.offset) / (to.offset - from.offset);
    
    return {
      strokeDashoffset: interpolate(segmentProgress, [0, 1], [from.offsetValue, to.offsetValue]),
      strokeWidth: interpolate(segmentProgress, [0, 1], [from.width, to.width]),
      strokeDasharray: segmentProgress < 0.5 ? from.dasharray : to.dasharray,
    };
  };
}

export const animateRingA = createRingAnimation(keyframesA);
export const animateRingB = createRingAnimation(keyframesB);
export const animateRingC = createRingAnimation(keyframesC);
export const animateRingD = createRingAnimation(keyframesD);