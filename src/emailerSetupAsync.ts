import EmailerConstructor from '@/interfaces/EmailerContructor';
import fs from 'fs-extra';
import EmailerSetup from '@/emailerSetup';

export default (emailerConstructor: EmailerConstructor): Promise<void> => {
  EmailerSetup(emailerConstructor);
  return fs.ensureDir(global.OPENAPI_NODEGEN_EMAILER_SETTINGS.logPath);
};
