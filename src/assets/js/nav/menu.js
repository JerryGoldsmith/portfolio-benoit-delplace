$(document).ready(function(){
	var menuIsOpen=false,
		$menu=$(".menu"),
		$menuItem=$(".menu-item"),
		$menuBg=$(".menu-bg"),
		$menuToggle=$(".menu-toggle"),

		menuWidth = 3000, /* même valeur que dans nav.css > .menu */
		// menuItemOffset = 150,
		menuItemOffset = 0,
		menuBgSkew =- 0, /* orientation */
		timeScale = {v:1} /* speed */
	;
	TweenMax.globalTimeScale(timeScale.v);

	TweenMax.set($menuItem,{
		x:-menuItemOffset
	});
	TweenMax.set($menuBg,{
		skewX:menuBgSkew
	})

	function setTimescale(v){
		TweenMax.to(timeScale, 0.5,{
			v:v,
			ease:Quad.easeInOut,
			onUpdate:updateTimescale,
			onComplete:updateTimescale
		});
	}

	function updateTimescale(){
		TweenMax.globalTimeScale(timeScale.v);
	}

	// Open menu

	function openMenu(){
		menuIsOpen=true;
		TweenMax.to($menu, 6.55,{ /* menu speed */
			x:menuWidth,
			force3D:false,
			ease:Elastic.easeOut,
			easeParams:[1.01,0.8]
		});
		TweenMax.to($menuBg, 0.55,{
			skewX:0,
			force3D:false,
			ease:Elastic.easeOut,
			easeParams:[1.01,0.8]
		});
		$menuItem.each(function(i){
			// 3.8 à la place de 0.7 >> la nav glisse vers la droite
			// 2.05 à la place de 0.05 >> les items arrivent en cascade
			TweenMax.to($(this), 6.55 + (i * 0.05),{
				delay:0.02 * i,
				x: -0,
				force3D:false,
				// ease:Quint.easeOut
				ease:Elastic.easeOut,
				easeParams:[1.1,0.6]
			});
		});
		// $.startUpdatingBlur(1000/timeScale.v);
	}

	// Close menu

	function closeMenu(){
		menuIsOpen=false;
		TweenMax.to($menu, 2.2,{
			x: -100,
			ease:Quad.easeIn,
			force3D:false
		});
		TweenMax.set($menuBg,{
			delay:0.2,
			skewX:menuBgSkew,
			force3D:false
		});
		$menuItem.each(function(i){
			TweenMax.to($(this), 2.2 + (0.05 * i),{
				x:-menuItemOffset,
				ease:Quad.easeIn,
				force3D:false
			});
		});
		// $.startUpdatingBlur(1000/timeScale.v);

	}

	//

	function toggleMenu(){
		if(menuIsOpen){
			$menuToggle.removeClass('menu-open');
			closeMenu();
		}else{
			$menuToggle.addClass('menu-open');
			openMenu();
		}
	}
	$menuToggle.click(function(){
		toggleMenu();
	});
	// $(".js-blur").initBlur();

})
