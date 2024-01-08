import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'cloud-s5-mobile',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
