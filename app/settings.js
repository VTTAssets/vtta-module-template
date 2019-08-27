"use strict";

var VTTAModuleTemplate = (function() {
  const MODULE_NAME = 'vtta-module-template';

  let config = {
    /**
     * The Module name
     */
    name: MODULE_NAME,

    /**
     * The module title
     */
    title: "My awesome Module",

    /**
     * Some generic path references that might be useful later in the application's windows
     */
    path: {
      root: `/modules/${MODULE_NAME}/`,
      public: `/modules/${MODULE_NAME}/public/`
    },

    /**
     * For each setting, there is are two corresponding entries in the language file to retrieve the translations for
     * - the setting name
     * - the hint displayed beneath the setting's name in the "Configure Game Settings" dialog.
     *
     * Given your MODULE_NAME is 'my-module' and your setting's name is 'EnableCritsOnly', then you will need to create to language entries:
     * {
     *  "my-module.EnableCritsOnly.Name": "Enable critical hits only",
     *  "my-module.EnableCritsOnly.Hint": "Players will only hit if they crit, and otherwise miss automatically *manic laughter*"
     * }
     *
     * The naming scheme is:
     * {
     *  "[MODULE_NAME].[SETTING_NAME].Name": "[TEXT]",
     *  "[MODULE_NAME].[SETTING_NAME].Hint": "[TEXT]"
     * }
     */
    settings: [
      {
        name: "DefaultPlayerUploadDirectory",
        scope: "client",
        default: `/modules/${MODULE_NAME}/public/players/`,
        type: String
      },
      {
        name: "DefaultNPCUploadDirectory",
        scope: "client",
        default: `/modules/${MODULE_NAME}/public/npcs/`,
        type: String
      }
    ]
  };

  return {
    path: () => {
        return config.path
    },
    settings: function() {
      return config.settings;
    },
    name: () => {
        return config.name
    },
    title: () => {
        return config.title
    }
  };
})();
