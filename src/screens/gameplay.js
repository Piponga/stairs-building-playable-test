import Screen from '../libs/screen';
import settings from '../settings';

export default class Gameplay extends Screen {

	constructor() {
		super();

		this.name = 'Gameplay';

		this.containers = [
			{name: 'MainContainer', children: [
				{name: 'game cont', positionLandscape: [0, -50], positionPortrait: [0, 0], children: [

					{name: 'background', type: 'sprite', image: 'background.jpg'},

					{name: 'decor plant 1', type: 'sprite', image: 'decor-plant-1.png', position: [-190, -230]},
					{name: 'decor plant 2', type: 'sprite', image: 'decor-plant-1.png', position: [490, -30]},
					{name: 'decor book stand', type: 'sprite', image: 'decor-book-stand.png', position: [200, -200]},
					{name: 'decor globe', type: 'sprite', image: 'decor-globe.png', position: [-540, -70]},
					{name: 'decor table 1', type: 'sprite', image: 'decor-table.png', position: [-350, 40]},

					{name: 'hero cont', position: [40, 130], children: [
						{name: 'hero', type: 'sprite', image: 'hero.png', anchor: [0.51, 0.92]},
						// {name: 'anchor', type: 'sprite', image: 'anchor-point.png', position: [0, 0]},
					]},

					{name: 'stairs cont', position: [520, 115], mask: 'stairs mask', children: [
						{name: 'stairs 1', type: 'sprite', image: 'stairs-1.png', anchor: [0.6, 0.55], children: [
							// {name: 'anchor', type: 'sprite', image: 'anchor-point.png'},
						]},
						{name: 'stairs 2', children: [
							{name: 'stairs 2 base', type: 'sprite', image: 'stairs-2-base.png', anchor: [0.6, 0.55]},
							{name: 'stairs 2 railing', type: 'sprite', image: 'stairs-2-railing.png', anchor: [0.6, 0.55]},
							{name: 'stairs 2 carpet', type: 'sprite', image: 'stairs-2-carpet.png', anchor: [0.6, 0.55]},
						]},
						{name: 'stairs 3', children: [
							{name: 'stairs 3 base', type: 'sprite', image: 'stairs-3-base.png', anchor: [0.6, 0.55]},
							{name: 'stairs 3 railing', type: 'sprite', image: 'stairs-3-railing.png', anchor: [0.6, 0.55]},
							{name: 'stairs 3 carpet', type: 'sprite', image: 'stairs-3-carpet.png', anchor: [0.6, 0.55]},
						]},
						{name: 'stairs 4', children: [
							{name: 'stairs 4 base', type: 'sprite', image: 'stairs-4-base.png', anchor: [0.6, 0.55]},
							{name: 'stairs 4 railing', type: 'sprite', image: 'stairs-4-railing.png', anchor: [0.6, 0.55]},
							{name: 'stairs 4 carpet', type: 'sprite', image: 'stairs-4-carpet.png', anchor: [0.6, 0.55]},
						]},
						// {name: 'anchor', type: 'sprite', image: 'anchor-point.png', position: [0, 0]},
					]},
					// {name: 'stairs mask', type: 'sprite', image: 'background.jpg'},

					{name: 'decor sofa 1', type: 'sprite', image: 'decor-sofa.png', position: [-385, 210]},
					{name: 'decor plant 3', type: 'sprite', image: 'decor-plant-2.png', position: [550, 295]},
					{name: 'decor plant 3', type: 'sprite', image: 'decor-plant-1.png', position: [5, 490]},
					{name: 'decor table 2', type: 'sprite', image: 'decor-table.png', position: [600, 610]},
					{name: 'decor sofa 2', type: 'sprite', image: 'decor-sofa.png', position: [265, 675]},

					// {name: 'TMP', type: 'sprite', image: 'TMP_room.jpg', alpha: 0.5},

					{name: 'stairs hammer cont', position: [440, 105], scaleLandscape: 1, scalePortrait: 1.2, children: [
						{name: 'stairs hammer', type: 'sprite', image: 'icon-hammer.png', anchor: [0.5, 0.9], button: 'hammer'},
						{name: 'stairs hammer hand cont', rotation: -1}
						// {name: 'anchor', type: 'sprite', image: 'anchor-point.png', position: [0, 0]},
					]},
					{name: 'stairs options cont', positionLandscape: [340, -190], positionPortrait: [340, -250], scaleLandscape: 1, scalePortrait: 1.2, children: [
						{name: 'stairs option 2', position: [-135, 0], button: 'stairs option', label: 2, children: [
							{name: 'stairs option 2 inactive', type: 'sprite', image: 'round-inactive.png'},
							{name: 'stairs option 2 active', type: 'sprite', image: 'round-active.png'},
							{name: 'stairs option 2 icon', type: 'sprite', image: 'stairs-2-icon.png'},
						]},
						{name: 'stairs option 3', position: [0, 0], button: 'stairs option', label: 3, children: [
							{name: 'stairs option 3 inactive', type: 'sprite', image: 'round-inactive.png'},
							{name: 'stairs option 3 active', type: 'sprite', image: 'round-active.png'},
							{name: 'stairs option 3 icon', type: 'sprite', image: 'stairs-3-icon.png'},
							{name: 'stairs option 3 hand cont', rotation: -0.5}
						]},
						{name: 'stairs option 4', position: [135, 0], button: 'stairs option', label: 4, children: [
							{name: 'stairs option 4 inactive', type: 'sprite', image: 'round-inactive.png'},
							{name: 'stairs option 4 active', type: 'sprite', image: 'round-active.png'},
							{name: 'stairs option 4 icon', type: 'sprite', image: 'stairs-4-icon.png'},
						]},
					]},
					{name: 'stairs option ok cont', children: [
						{name: 'stairs option ok', type: 'sprite', image: 'ok-btn.png', anchor: [0.5, 0], button: 'ok'},
					]},

					{name: 'hand cont', children: [
						{name: 'hand', type: 'sprite', image: 'hand.png', anchor: [0.3, 0.1]},
						// {name: 'anchor', type: 'sprite', image: 'anchor-point.png', position: [0, 0]},
					]}
				]},
			]},
			{name: 'CTAContainer', children: [
				{name: 'cta shading cont', event: 'cta'},
				{name: 'cta banner', type: 'sprite', image: 'banner.png', positionLandscape: [0, -60], positionPortrait: [0, -20], scaleLandscape: 1, scalePortrait: 0.99},
			]},
			{name: 'LogoContainer', positionLandscape: [-520, -250], positionPortrait: [0, -550], scaleLandscape: 0.77, scalePortrait: 1.1, LTRBLandscape: 'LT', LTRNPortrait: 'T', stickinessLandscape: [0, 0.9], stickinessPortrait: [1, 0], children: [
				{name: 'logotype', type: 'sprite', image: 'logotype.png', event: 'cta'},
			]},
			{name: 'ButtonContainer', positionLandscape: [0, 240], positionPortrait: [0, 550], scaleLandscape: 1, scalePortrait: 1, LTRB: 'B', stickinessLandscape: [1, 0.9], stickinessPortrait: [1, 0], children: [
				{name: 'cta button', type: 'sprite', image: 'continue-btn.png', button: 'cta'},
				{name: 'cta button hand cont', rotation: -2.5, position: [40, -20]}
			]},
		];

		this.events = {

			'Gameplay hammer Down': (container, e) => {

				this.hideHand();
				this.resetDefaultStair();
				this.touchHammer();
				this.showStairsOptions();
			},

			'Gameplay stairs option Down': (container, e) => {

				this.hideHand();
				this.chooseStairs(container.params.label);
			},

			'Gameplay ok Down': (container, e) => {

				this.pulseElasticContainer(container);
			},

			'Gameplay ok Up': (container, e) => {

				this.hideHand();
				this.hideStairsOptions();

				this.showCTA(0.5);
			},

			'Gameplay cta Up': (container, e) => {

				alert('Open: https://playrix.com');
			},
		};
	}

	// ////////////////////////////////////////////////////////////////////////////////////////// EVENTS
	// //////////////////////////////////////////////////////////////////////////////////////////
	beforeBuilt() {

		this.activeStairs = null;

	}

	built() {

		// Маска для лестницы
		{
			const maskGraphics = new PIXI.Graphics();
			maskGraphics.beginFill();
			maskGraphics.drawRect(-this['background'].texture.width / 2, -this['background'].texture.height / 2, this['background'].texture.width, this['background'].texture.height);
			maskGraphics.endFill();

			this['game cont'].addChild(maskGraphics);
			this['stairs cont'].mask = maskGraphics;
		}

		// Шейдинг для CTA
		{
			const ctaShadingGraphics = new PIXI.Graphics();
			ctaShadingGraphics.beginFill(0x000000, 0.6);
			ctaShadingGraphics.drawRect(-1000, -1000, 2000, 2000);
			ctaShadingGraphics.endFill();
			ctaShadingGraphics.scale.set(4);

			this['cta shading cont'].addChild(ctaShadingGraphics);
		}
	}

	shown() {

		// Для тестов
		setTimeout(() => {
			// this.showStairsOptions();
			// this.showCTA();
		}, 500);

		this['CTAContainer'].visible = false;

		this.resetGameplay();
		this.hideHand();

		this.startGameplay();

		this.pulseCTAButton();
	}

	hidden() {

	}

	resize() {

		let [gameWidth, gameHeight] = this.getGameSize();
		let scale = 1;

		if (App.isLandscape) {

			scale = Math.lerp(1, 1.2, Math.clamp(Math.unlerp(2, 1, App.aspectRatio), 0, 1));

		} else {

			scale = Math.lerp(0.85, 1.2, Math.clamp(Math.unlerp(0.5, 1, App.aspectRatio), 0, 1));
		}

		if (gameWidth <= settings.width) this['MainContainer'].x = gameWidth / 2 - this['background'].width / 2 * scale + 10;
		else this['MainContainer'].x = 0;

		this['MainContainer'].scale.set(scale);

	}

	update(dt) {

	}

	// ////////////////////////////////////////////////////////////////////////////////////////// GAME
	// //////////////////////////////////////////////////////////////////////////////////////////
	startGameplay() {

		let delay = 0.1;

		this.showHero(delay);

		delay += 0.1;

		this.animateDefaultStairs(delay);

		delay += 0.1;

		this.showHammer(delay);
	}

	resetGameplay() {

		if (this.timelineHandShow) this.timelineHandShow.kill();

		if (this.timelineHero) this.timelineHero.kill();

		if (this.tweenHeroIdle) this.tweenHeroIdle.kill();

		if (this.timelineHammer) this.timelineHammer.kill();
		if (this.timelineHammerIdle) this.timelineHammerIdle.kill();

		if (this.timelineDefaultStairs) this.timelineDefaultStairs.kill();

		_.each(this['stairs cont'].children, child => child.visible = false);

		this['stairs 1'].visible = true;

		this['hero'].visible = false;
		this['stairs hammer'].visible = false;
		this['stairs option ok'].visible = false;

		_.each(this['stairs options cont'].children, child => {
			child.visible = false;
			this[child.params.name + ' active'].visible = false;
			if (child.timelineOptionsShow) child.timelineOptionsShow.kill();
		});

		this.activeStairs = this['stairs 1'];
	}

	// ////////////////////////////////////////////////////////////////////////////////////////// HERO
	// //////////////////////////////////////////////////////////////////////////////////////////
	showHero(delay = 0) {

		const hero = this['hero'];

		hero.alpha = 0;
		hero.position.set(-10, -5);
		hero.scale.set(1.01, 0.992);

		if (this.timelineHero) this.timelineHero.kill();
		this.timelineHero = GSAP.timeline({delay: delay})
			.to(hero, {
				alpha: 1,
				duration: 0.1, ease: 'none'
			})
			.to(hero, {
				x: 0, y: 0,
				duration: 0.4, ease: 'power1.out'
			}, 0)

		if (this.tweenHeroIdle) this.tweenHeroIdle.kill();
		this.tweenHeroIdle = GSAP.to(hero, {
			scaleX: 0.992, scaleY: 1.001,
			delay: delay, duration: 0.3, ease: 'sine.inOut',
			yoyo: true, repeat: -1
		});

		hero.visible = true;
	}

	// ////////////////////////////////////////////////////////////////////////////////////////// HAMMER
	// //////////////////////////////////////////////////////////////////////////////////////////
	showHammer(delay = 0) {

		const hammer = this['stairs hammer'];

		hammer.alpha = 0;
		hammer.position.set(0, 0);
		hammer.scale.set(0.1);
		hammer.rotation = 0;

		if (this.timelineHammer) this.timelineHammer.kill();
		this.timelineHammer = GSAP.timeline({delay: delay})
			.to(hammer, {
				alpha: 1, scaleX: 0.85, scaleY: 1.15, y: -20,
				duration: 0.2, ease: 'power1.out',
				onComplete: () => {

					if (this.timelineHammerIdle) this.timelineHammerIdle.kill();
					this.timelineHammerIdle = GSAP.timeline({delay: 0.5, repeat: -1})
						.to(hammer, {
							rotation: -0.06,
							duration: 0.1, ease: 'power1.out'
						})
						.to(hammer, {
							rotation: 0.06,
							duration: 0.08, ease: 'power1.inOut',
							yoyo: true, repeat: 8
						})
						.to(hammer, {
							rotation: 0,
							duration: 0.1, ease: 'power1.inOut'
						})
						.to(hammer, {
							rotation: 0,
							duration: 2, ease: 'none'
						})
				}
			})
			.addLabel('scaleElastic')
			.to(hammer, {
				y: 10,
				duration: 0.3, ease: 'power1.inOut'
			})
			.to(hammer, {
				y: -3,
				duration: 0.4, ease: 'power1.inOut',
			})
			.to(hammer, {
				y: 3,
				duration: 0.4, ease: 'power1.inOut',
				yoyo: true, repeat: -1
			})
			.to(hammer, {
				scaleX: 1, scaleY: 1,
				duration: 2.5, ease: 'elastic.out'
			}, 'scaleElastic')

		hammer.visible = true;

		delay += 1.5;

		let pos = this['game cont'].toLocal(this['stairs hammer hand cont'].parent.toGlobal(this['stairs hammer hand cont'].position));

		this.showHandAt(
			pos.x + 20,
			pos.y - 40,
			this['stairs hammer hand cont'].params.rotation,
			delay
		);
	}

	touchHammer() {

		if (this.timelineHammer) this.timelineHammer.kill();
		if (this.timelineHammerIdle) this.timelineHammerIdle.kill();

		const hammer = this['stairs hammer'];

		if (this.timelineTouchHammer) this.timelineTouchHammer.kill();
		this.timelineTouchHammer = GSAP.timeline()
			.to(hammer, {
				scaleXY: 1.2,
				duration: 0.1, ease: 'power1.out'
			})
			.to(hammer, {
				alpha: 0,
				duration: 0.1, ease: 'none',
				onComplete: () => {
					hammer.visible = false;
				}
			}, 0)
	}

	// ////////////////////////////////////////////////////////////////////////////////////////// STAIRS
	// //////////////////////////////////////////////////////////////////////////////////////////
	animateDefaultStairs(delay = 0) {

		const stairs = this['stairs cont'];

		stairs.scale.set(1);

		if (this.timelineDefaultStairs) this.timelineDefaultStairs.kill();
		this.timelineDefaultStairs = GSAP.timeline({delay: delay, repeat: -1})
			.to(stairs, {
				scaleXY: 1.04,
				duration: 0.2, ease: 'power1.inOut'
			})
			.to(stairs, {
				scaleXY: 1,
				duration: 0.2, ease: 'power1.inOut',
				yoyo: true, repeat: 2
			})
			.to(stairs, {
				scaleXY: 1,
				duration: 4, ease: 'none'
			})
	}

	resetDefaultStair() {

		if (this.timelineDefaultStairs) this.timelineDefaultStairs.kill();

		GSAP.to(this['stairs cont'], {
			scaleXY: 1,
			duration: 0.2, ease: 'power1.inOut'
		})
	}

	showStairs(stairsNum = 0) {

		if (!stairsNum) return;

		const stairs = this['stairs ' + stairsNum];

		if (stairs === this.activeStairs) return;

		if (this.activeStairs) {

			GSAP.to(this.activeStairs, {
				alpha: 0,
				duration: 0.2,
			})
		}

		const stairsBase = this['stairs ' + stairsNum + ' base'];
		const stairsRailing = this['stairs ' + stairsNum + ' railing'];
		const stairsCarpet = this['stairs ' + stairsNum + ' carpet'];

		if (stairsBase) {

			this.activeStairs = stairs;

			_.each([stairsBase, stairsRailing, stairsCarpet], (child, ind) => {

				child.alpha = 0;
				child.y = -10;
				child.scale.set(1);
				child.visible = true;

				GSAP.timeline({delay: ind * 0.1})
					.to(child, {
						alpha: 1,
						duration: 0.2
					})
					.to(child, {
						y: -15,
						duration: 0.1, ease: 'power1.out'
					}, 0)
					.to(child, {
						y: 0,
						duration: 0.3, ease: 'power1.inOut'
					})
			});

			stairs.alpha = 1;
			stairs.visible = true;

		} else {

			this.activeStairs = this['stairs 1'];

			this['stairs 1'].alpha = 1;
			this['stairs 1'].visible = true;
		}
	}

	// ////////////////////////////////////////////////////////////////////////////////////////// OPTIONS
	// //////////////////////////////////////////////////////////////////////////////////////////
	showStairsOptions() {

		_.each(this['stairs options cont'].children, (child, ind) => {

			child.alpha = 0;
			child.y = 40;

			if (child.timelineOptionsShow) child.timelineOptionsShow.kill();
			child.timelineOptionsShow = GSAP.timeline({delay: ind * 0.07})
				.to(child, {
					alpha: 1,
					duration: 0.2
				})
				// .to(child, {
				// 	y: 0,
				// 	duration: 1.7, ease: 'elastic.out(1.2, 0.4)'
				// }, 0)
				.to(child, {
					y: -10,
					duration: 0.2, ease: 'power1.out'
				}, 0)
				.to(child, {
					y: 8,
					duration: 0.4, ease: 'power1.inOut'
				})
				.to(child, {
					y: -4,
					duration: 0.5, ease: 'power1.inOut'
				})
				.to(child, {
					y: 2,
					duration: 0.6, ease: 'power1.inOut'
				})
				.to(child, {
					y: -2,
					duration: 0.6 + Math.random() * 0.2, ease: 'power1.inOut',
					yoyo: true, repeat: -1
				})

			child.visible = true;
		});

		let pos = this['game cont'].toLocal(this['stairs option 3 hand cont'].parent.toGlobal(this['stairs option 3 hand cont'].position));

		this.showHandAt(
			pos.x,
			pos.y - 20,
			this['stairs option 3 hand cont'].params.rotation,
			1
		);
	}

	chooseStairs(stairsNum = 2) {

		_.each(this['stairs options cont'].children, child => {
			this[child.params.name + ' inactive'].visible = true;
			this[child.params.name + ' active'].visible = false;
		});

		this['stairs option ' + stairsNum + ' inactive'].visible = false;
		this['stairs option ' + stairsNum + ' active'].visible = true;

		const stairsOption = this['stairs option ' + stairsNum];

		// GSAP.timeline()
		// 	.to(stairsOption, {
		// 		scaleXY: 1.15, duration: 0.1, ease: 'power1.out'
		// 	})
		// 	.to(stairsOption, {
		// 		scaleXY: 1, duration: 1.2, ease: 'elastic.out'
		// 	});

		stairsOption.addChild(this['stairs option ok cont']);
		this['stairs option ok cont'].y = 60;

		const ok = this['stairs option ok'];

		if (!ok.visible) {

			ok.alpha = 0;
			ok.scale.set(0.7);
			ok.visible = true;
		}

		if (this.timelineOkShow) this.timelineOkShow.kill();
		this.timelineOkShow = GSAP.timeline()
			.to(ok, {
				alpha: 1,
				duration: 0.1
			})
			.to(ok, {
				scaleX: 1.05, scaleY: 0.95, y: 15,
				duration: 0.1, ease: 'power1.out'
			}, 0)
			.addLabel('label1')
			.to(ok, {
				y: 0,
				duration: 0.4, ease: 'back'
			}, 'label1')
			.to(ok, {
				scaleX: 1, scaleY: 1,
				duration: 1, ease: 'elastic.out'
			}, 'label1');

		this.showStairs(stairsNum);
	}

	hideStairsOptions() {

		_.each(this['stairs options cont'].children, (child, ind) => {

			if (child.timelineOptionsShow) child.timelineOptionsShow.kill();

			GSAP.timeline({delay: ind * 0.05})
				.to(child, {
					alpha: 0,
					duration: 0.1
				})
		});

		setTimeout(() => {
			this['stairs option ok'].visible = false;
		}, 100);
	}

	// ////////////////////////////////////////////////////////////////////////////////////////// HAND
	// //////////////////////////////////////////////////////////////////////////////////////////
	showHandAt(x = 0, y = 0, rotation = 0, delay = 1.5) {

		const handCont = this['hand cont'];
		const hand = this['hand'];

		handCont.position.set(x, y);
		handCont.rotation = rotation;

		hand.alpha = 0;
		hand.position.set(0, 20);
		hand.scale.set(1);

		if (this.timelineHandShow) this.timelineHandShow.kill();
		this.timelineHandShow = GSAP.timeline({delay: delay})
			.to(hand, {
				alpha: 1,
				duration: 0.1, ease: 'none'
			})
			.to(hand, {
				y: 0,
				duration: 0.2, ease: 'power1.inOut'
			}, 0)
			.to(hand, {
				scaleX: 1.05, scaleY: 0.95,
				duration: 0.1, ease: 'power1.out'
			}, '-=50%')
			.to(hand, {
				y: 20, scaleX: 1, scaleY: 1,
				duration: 0.4, ease: 'power1.inOut',
				yoyo: true, repeat: -1
			})

		handCont.visible = true;
	}

	hideHand() {

		if (this.timelineHandShow) this.timelineHandShow.kill();

		this['hand cont'].visible = false;
	}

	// ////////////////////////////////////////////////////////////////////////////////////////// CTA
	// //////////////////////////////////////////////////////////////////////////////////////////
	pulseCTAButton() {

		GSAP.timeline()
			.to(this['cta button'], {
				scaleXY: 1.03,
				duration: 0.5, ease: 'sine.inOut',
				yoyo: true, repeat: -1
			})
	}

	showCTA(delay = 0) {

		setTimeout(() => {

			this.hideHand();

			GSAP.timeline()
				.to(this['hero'], {
					alpha: 0,
					duration: 0.2
				})

			this['cta shading cont'].alpha = 0;
			this['cta banner'].alpha = 0;
			this['cta banner'].scale.set(0.7);

			GSAP.timeline()
				.to(this['cta shading cont'], {
					alpha: 1,
					duration: 0.2
				})
				.to(this['cta banner'], {
					alpha: 1,
					duration: 0.2
				})
				.to(this['cta banner'], {
					scaleXY: 1,
					duration: 0.4, ease: 'back'
				}, '<')

			this['CTAContainer'].visible = true;


			this['cta button hand cont'].addChild(this['hand cont']);

			this.showHandAt(0, 0, 0, 0.4);

		}, delay * 1000);
	}

	// //////////////////////////////////////////////////////////////////////////////////////////
	// //////////////////////////////////////////////////////////////////////////////////////////
	pulseElasticContainer(container) {

		if (!container) return;

		GSAP.timeline()
			.to(container, {
				scaleX: 1.2, scaleY: 0.8, duration: 0.05, ease: 'power1.out'
			})
			.to(container, {
				scaleX: 1, scaleY: 1, duration: 1.2, ease: 'elastic.out'
			});
	}

}
