import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import SettingsPage from 'flarum/common/components/SettingsPage';
import DiscussionList from 'flarum/common/components/DiscussionList';

import FieldSet from 'flarum/common/components/FieldSet';
import ItemList from 'flarum/common/utils/ItemList';
import Switch from 'flarum/common/components/Switch';

import pangu from 'pangu';

app.initializers.add('hamcq/pangujs', () => {
  extend(DiscussionPage.prototype, 'view', function () {
    if(app.forum.data.attributes.contentPanguJs){
      pangu.spacingPage();
      return;
    }
    if(!app.session.user){
      return;
    }
    if(app.session.user.preferences().panguJsEnable){
      pangu.spacingPage();
    }
  });

  extend(DiscussionList.prototype, 'view', function () {
    if(app.forum.data.attributes.contentPanguJs){
      pangu.spacingPage();
      return;
    }
    if(!app.session.user){
      return;
    }
    if(app.session.user.preferences().panguJsEnable){
      pangu.spacingElementByClassName("DiscussionListItem-title");
    }
  });

  extend(SettingsPage.prototype, 'settingsItems', function (items) {
    if(app.forum.data.attributes.contentPanguJs){
      return;
    }
    items.add(
      'panguSetting',
      FieldSet.component(
        {
          label: "优化阅读体验",
          className: '',
        },
        this.panguItems().toArray()
      )
    );
  });

  SettingsPage.prototype['panguItems'] = function () {
    const items = new ItemList();
    items.add(
      'pangu-enable',
      Switch.component(
        {
          state: this.user.preferences().panguJsEnable,
          onchange: (value) => {
            this.panguJsEnableLoading = true;

            this.user.savePreferences({ panguJsEnable: value }).then(() => {
              this.panguJsEnableLoading = false;
              m.redraw();
            });
          },
          loading: this.panguJsEnableLoading,
        },
        "根据中文文案排版指北，使用 pangu.js，优化排版，提升阅读体验"
      )
    );
    return items;
  }

});
