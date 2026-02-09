import { useRef, useState } from 'react';
import { HiOutlinePencil } from 'react-icons/hi2';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useLanguage } from '@/hooks';
import { cn } from '@/lib/utils';
import { useAuthStore, useToastStore } from '@/stores';
import styles from '@/styles/modules/profile.module.css';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

const fileToDataUrl = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

interface ProfileAvatarUploadProps {
  userName: string;
  className?: string;
}

export const ProfileAvatarUpload = ({
  userName,
  className,
}: ProfileAvatarUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();
  const user = useAuthStore.use.user();
  const { setUser } = useAuthStore.use.actions();
  const { success, error } = useToastStore.use.actions();

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !user) return;

    if (!ACCEPTED_TYPES.includes(file.type)) {
      error(t('profile.avatarFormatError'));
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      error(t('profile.avatarSizeError'));
      return;
    }

    setIsLoading(true);
    e.target.value = '';

    try {
      const dataUrl = await fileToDataUrl(file);
      setUser({ ...user, avatar: dataUrl });
      success(t('profile.profilePictureUpdated'));

      // TODO: When backend supports it, upload to API and use returned URL:
      // const formData = new FormData();
      // formData.append('avatar', file);
      // const { data } = await axiosInstance.patch('/api/users/me', formData);
      // setUser({ ...user, avatar: data.avatar });
    } catch {
      error(t('profile.avatarUpdateFailed'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn(styles.avatarUpload, className)}>
      <Avatar className="h-20 w-20">
        <AvatarImage src={user?.avatar} alt={userName} />
        <AvatarFallback className="text-xl">
          {getInitials(userName)}
        </AvatarFallback>
      </Avatar>
      <Tooltip>
        <TooltipTrigger asChild>
          <label
            htmlFor="avatar-upload"
            className={cn(
              styles.avatarUploadBadge,
              isLoading && styles.avatarUploadBadgeLoading,
            )}
          >
            <input
              ref={inputRef}
              id="avatar-upload"
              type="file"
              accept={ACCEPTED_TYPES.join(',')}
              className="sr-only"
              onChange={handleFileChange}
              disabled={isLoading}
            />
            <HiOutlinePencil className="h-4 w-4" />
          </label>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          {isLoading
            ? t('profile.uploading')
            : user?.avatar
              ? t('profile.changeImage')
              : t('profile.uploadImage')}
        </TooltipContent>
      </Tooltip>
    </div>
  );
};
