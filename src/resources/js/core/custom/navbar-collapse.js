var NavbarCollapse = (function() {

	// Variables

	var $nav = $('#navbar-main'),
		$collapse = $('#navbar-main-collapse'),
		$navTop = $('#navbar-top-main');


	// Methods

	function showNavbarCollapse($this) {
		$nav.addClass('navbar-collapsed');
		$navTop.addClass('navbar-collapsed');
		// $('#header-main').addClass('header-collapse-show');
		$('body').addClass('modal-open');
	}

	function hideNavbarCollapse($this) {
		$this.removeClass('collapsing').addClass('collapsing-out');
		$nav.removeClass('navbar-collapsed').addClass('navbar-collapsed-out');
		$navTop.removeClass('navbar-collapsed').addClass('navbar-collapsed-out');
	}

	function hiddenNavbarCollapse($this) {
		$this.removeClass('collapsing-out');
		$nav.removeClass('navbar-collapsed-out');
		$navTop.removeClass('navbar-collapsed-out');
		// $('#header-main').removeClass('header-collapse-show');
		$('body').removeClass('modal-open');
	}


	// Events

	if ($collapse.length) {
		$collapse.on({
			'show.bs.collapse': function() {
				showNavbarCollapse($collapse);
			}
		})

		$collapse.on({
			'hide.bs.collapse': function() {
				hideNavbarCollapse($collapse);
			}
		})

		$collapse.on({
			'hidden.bs.collapse': function() {
				hiddenNavbarCollapse($collapse);
			}
		})
	}

})();
