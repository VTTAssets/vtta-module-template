# vtta-module-template
A template for jump-starting your development for Foundry VTT

## File structure

```
vtta-module-template
    app
        main                Folder for a self-contained FormApplication, consisting of: 
            index.js        Programming logic (Controller)
            styles.css      Styling (View)
            template.hbs    User Interface (View)
        index.js            Bootstraps the module by registering settings etc.
        settings.js         Basic configuration of the module. Is applied by the bootstraping app/index.js
    lang                    Directory for language files
        en.json             en-translation file
        de.json             de-translation file
    lib
        index.js            Shared Library code for this module
    public                  Resources used by the application, e.g.:
        img                 Images
module.json                 Module definition for Foundry VTT
jsconfig.json               Javascript configuration file for Microft Code editor. References to the basic Foundry VTT libraries and dnd5e system
                            for code completion/ inspection when developing within the Foundry VTT directory structure
```                         

## Translations
Add translations to the language files and use them 

**within your code**: `game.i18n.translate('MODULE_NAME.IDENTIFIER')`
**within your handlebars views**: `{{ translate MODULE_NAME.IDENTIFIER }}`