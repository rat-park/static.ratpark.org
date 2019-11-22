$(window).on('hashchange', function() {
  ChangeTheme();
});

$(document).ready(function() {
  ChangeTheme();

  $('.wrapper').on('mouseover', function() {
    $(this).addClass('hover')
  }).on('mouseleave', function() {
    $(this).removeClass('hover')
  });

  var isDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  isDarkMode.addListener(isDarkModeOnUpdate);
  isDarkModeOnUpdate();
  function isDarkModeOnUpdate() {
    if(isDarkMode.matches) {
      ChangeThemeArg('dark');
    } else {
      ChangeThemeArg('light');
    }
  }

})

function ChangeTheme() {
  Data = location.hash.replace( /^#/, '' );
  Search = Data.search('=');
  if(Search !== -1) {
    DataSplit = Data.split('=');
    if(DataSplit[0] === 'theme') {
      if(DataSplit[1] === 'light' || DataSplit[1] === 'lightdark' || DataSplit[1] === 'darklight' || DataSplit[1] === 'dark') {
        ChangeThemeArg(DataSplit[1]);
      } else {
        ChangeThemeArg('light');
      }
    } else {
      ChangeThemeArg('light');
    }
  } else {
    ChangeThemeArg('light');
  }
}

function ChangeThemeArg(arg) {
  $('body').removeClass();
  $('body').addClass(arg);
  $('.themes .wrapper').removeClass('active');
  $('#' + arg).parent().addClass('active');
}
