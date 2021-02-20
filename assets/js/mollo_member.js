(function($, Drupal, drupalSettings) {
  Drupal.behaviors.molloClient = {
    attach(context, settings) {
      console.log("Mollo Member Book");

        $('#mollo-member', context)
          .once('mollo-member')
          .each(() => {});

    },
  };
})(jQuery, Drupal, drupalSettings);
