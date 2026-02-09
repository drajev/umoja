import {
  type ComponentType,
  Activity as ReactActivity,
  type ReactNode,
} from 'react';

export type ActivityMode = 'visible' | 'hidden';

export interface ActivityProps {
  mode: ActivityMode;
  children: ReactNode;
}

const FallbackActivity = ({ children }: ActivityProps) => <>{children}</>;

export const Activity = ({ mode, children }: ActivityProps) => {
  const ActivityComponent: ComponentType<ActivityProps> =
    ReactActivity ?? FallbackActivity;

  return <ActivityComponent mode={mode}>{children}</ActivityComponent>;
};

Activity.displayName = 'Activity';
