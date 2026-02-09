import { memo } from 'react';
import { Text } from '@/components/ui/typography';
import { useLanguage } from '@/hooks';
import styles from '@/styles/modules/footer.module.css';

export const Footer = memo(() => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Text variant="small" className={styles.copyright}>
        {t('footer.copyright', { year })}
      </Text>
    </footer>
  );
});
