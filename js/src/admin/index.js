import app from 'flarum/admin/app';
import PanguJsSetting from './components/PanguJsSetting';

app.initializers.add('hamcq/pangujs', () => {
  app.extensionData
    .for('hamcq-pangujs')
    .registerPage(PanguJsSetting)
});
