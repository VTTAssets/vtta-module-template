/**
 * Name of this Sub-Application
 */
const APP = {
    name: "main",
    title: 'My Awesome Application'
};

class VTTAModuleTemplateMain extends FormApplication {
  constructor(entity, options) {
    super(entity, options);
    this.log('Module loaded');

    this.library = new VTTAModuleTemplateLibrary();
  }

  activateListeners(html) {
      this.log('Activating listeners');
    super.activateListeners(html);
  }

  /**
   *
   * @param {event} event
   * @param {object} formData The form data delivered through the application template's submit action
   */
  _updateObject(event, formData) {
    // Update the object this ApplicationForm is based on
    // e.g. this.object.update(formData);
  }

  static get defaultOptions() {
    const options = super.defaultOptions;
    options.template =
      "public/modules/" + VTTAModuleTemplate.name() + "/app/" + APP.name + "/template.hbs";
    options.width = 860;
    options.height = "auto";
    options.title = APP.title
    return options;
  }

  /**
   * Provides data to the form, which then can be rendered using the handlebars templating engine
   */
  getData() {
    return {
        name: VTTAModuleTemplate.name(),
        libraryName: this.library.getName()
    };
  }

  // send a formatted log message to console.log
  log = obj => {
    if (typeof obj === "string") {
      console.log(VTTAModuleTemplate.name() + " | " + obj);
    } else {
      console.log(VTTAModuleTemplate.name() + ":");
      console.log(obj);
    }
  };
}

/**
 * Implement Hooks to render the Application, e.g.
 */

Hooks.on("renderActorSheet5eCharacter", (app, html, data) => {
  $(html)
    .find("img.sheet-profile")
    .on("click", event => {
      let app = new VTTAModuleTemplateMain(data.actor, {
        editable: true,
        closeOnSubmit: true
      });
      app.render(true);
    });
});
