import settings from '../settings';

export default {

	buildContainers(parent, containers = [], screen) {

		if (!containers.length) return;

		for (let i = 0; i < containers.length; i++) {

			let params = containers[i];
			let name = params.name;

			let obj = this.buildChild.call(this, parent, params);

			if (obj) {

				if (screen) screen[name] = obj;

				if (params.hasOwnProperty('children')) {

					this.buildContainers(obj, params.children, screen);
				}
			}
		}
	},

	buildChild(parent, params) {

		let type = params.type || 'container';
		let result = null;

		if (type === 'container') {

			result = new PIXI.Container();

		}
		else if (type === 'sprite') {

			result = new PIXI.Sprite(this.getTexture(params.image));

		}
		else if (type === 'text') {

			result = new PIXI.Text(params.text, params.styles);

		}

		if (result) {

			result.params = params;

			if (result.anchor) result.anchor.set(0.5);

			if (parent) parent.addChild(result);

			this.applyTransforms(result, result.params);

			if (params.event || params.button) this.addInteraction(result, (params.event || params.button), this);
		}

		return result;
	},

	// /////////////////////////////////////////////////////////////////////////////// EVENTS
	buildEvents(events, screen) {

		for (let key in events) {

			EE.on(key, events[key], screen);
		}
	},

	addInteraction(obj, event, screen) {

		obj.buttonMode = !!(obj.hasOwnProperty('params') ? obj.params.button : true);
		obj.interactive = true;

		obj.on('pointerdown', (e) => {
			EE.emit(screen.name + ' ' + event + ' Down', obj, e);
		});
		obj.on('pointerup', (e) => {
			EE.emit(screen.name + ' ' + event + ' Up', obj, e);
		});
		obj.on('pointermove', (e) => {
			EE.emit(screen.name + ' ' + event + ' Move', obj, e);
		});
		// obj.on('pointerover', (event) => {
		// 	console.log(666)
		// });
		// obj.on('pointerout', (event) => {
		// 	console.log(666)
		// });
	},


	// /////////////////////////////////////////////////////////////////////////////// TRANSFORMS
	applyContainersTransforms(containers) {

		if (!containers.length) return;

		for (let i = 0; i < containers.length; i++) {

			let container = containers[i];
			let params = container.params;

			this.applyTransforms(container, params);

			if (container.children && container.children.length) {

				this.applyContainersTransforms(container.children);
			}
		}
	},

	applyTransforms(obj, params = {}) {

		for (let key in params) {

			if (/position/g.test(key)) {
				params.position = this.getTransformParam(params, 'position', [0, 0]);
				obj.position.set(...params.position);
			}

			if (/rotation/g.test(key)) {
				params.rotation = this.getTransformParam(params, 'rotation', 0);
				obj.rotation = params.rotation;
			}

			if (/scale/g.test(key)) {
				params.scale = this.getTransformParam(params, 'scale', [1, 1]);
				let scale = !Array.isArray(params.scale) ? [params.scale, params.scale] : params.scale;
				obj.scale.set(...scale);
			}

			if (/anchor/g.test(key)) {
				params.anchor = this.getTransformParam(params, 'anchor', 0.5);
				let anchor = !Array.isArray(params.anchor) ? [params.anchor, params.anchor] : params.anchor;
				if (obj.anchor) obj.anchor.set(...anchor);
			}

			if (/alpha/g.test(key)) {
				params.alpha = this.getTransformParam(params, 'alpha', 1);
				obj.alpha = params.alpha;
			}

			if (/visible/g.test(key)) {
				params.visible = this.getTransformParam(params, 'visible', true);
				obj.visible = params.visible;
			}

			if (/mask/g.test(key)) {
				const maskName = this.getTransformParam(params, 'mask', null);
				const mask = this[maskName];
				if (mask) obj.mask = mask;
			}
		}
	},

	getTransformParam(params, paramName, defVal) {

		if (!params) return defVal;

		let val = null;
		let valPortrait = params[paramName + 'Portrait'];
		let valLandscape = params[paramName + 'Landscape'];

		if (App.isPortrait) {
			if (valPortrait !== undefined) val = valPortrait;
		} else {
			if (valLandscape !== undefined) val = valLandscape;
		}

		if (val === null) {
			if (params.hasOwnProperty(paramName)) {
				val = params[paramName];
			} else if (defVal) {
				val = defVal;
			}
		}

		return val;
	},

	applyStickiness(containers) {

		if (!containers.length) return;

		for (let i = 0; i < containers.length; i++) {

			let container = containers[i];
			let params = container.params;

			if (!params) continue;

			let defSize = App.isLandscape ? [settings.width, settings.height] : [settings.height, settings.width] ;

			// if (container.children[i].params['scaleStrategy']) {
			// 	let scale = this.getParam(childsContainer.children[i].params, 'scale', [1, 1]);
			// 	let size = this.getParam(childsContainer.children[i].params, 'size');
			// 	let scaleByStrategy = [(this.camera.right - this.camera.left) / defSize[0], (this.camera.top - this.camera.bottom) / defSize[1]];
			//
			// 	if (childsContainer.children[i].params['scaleStrategy'] === 'cover-screen') {
			//
			// 		scaleByStrategy = Math.max(scaleByStrategy[0], scaleByStrategy[1]);
			// 		childsContainer.children[i].scale.set(scaleByStrategy * scale[0], scaleByStrategy * scale[1], 1);
			//
			// 	} else if (childsContainer.children[i].params['scaleStrategy'] === 'fit-screen') {
			//
			// 		let sizeScale = size ? [defSize[0] / size[0], defSize[1] / size[1]] : [1, 1];
			// 		childsContainer.children[i].scale.set(scaleByStrategy[0] * sizeScale[0] * scale[0], scaleByStrategy[1] * sizeScale[1] * scale[1], 1);
			//
			// 	}
			// }

			if (!params['LTRB'] && !params['LTRBLandscape'] && !params['LTRBPortrait']) continue;

			let position = this.getTransformParam(params, 'position', [0, 0]);

			if (position[0] > -1 && position[0] < 1) position[0] = Math.round(defSize[0] / 2 * position[0]);
			if (position[1] > -1 && position[1] < 1) position[1] = Math.round(defSize[1] / 2 * position[1]);

			let initX = defSize[0] / 2 + position[0];
			let initY = defSize[1] / 2 + position[1];
			let posX = position[0];
			let posY = position[1];

			let LTRB = this.getTransformParam(params, 'LTRB', '');

			let stickiness = this.getTransformParam(params, 'stickiness', [0, 0]);

			let [gameWidth, gameHeight] = this.getGameSize();

			if (LTRB) {
				if (/L/i.test(LTRB)) {
					posX = Math.lerp(position[0], -gameWidth / 2 + initX, stickiness[0]);
				}
				if (/T/i.test(LTRB)) {
					posY = Math.lerp(position[1], -gameHeight / 2 + initY, stickiness[1]);
				}
				if (/R/i.test(LTRB)) {
					posX = Math.lerp(position[0], gameWidth / 2 - (defSize[0] - initX), stickiness[0]);
				}
				if (/B/i.test(LTRB)) {
					posY = Math.lerp(position[1], gameHeight / 2 - (defSize[1] - initY), stickiness[1]);
				}
			}

			container.position.x = posX;
			container.position.y = posY;
		}
	},

	getGameSize(gameContainer = this['MainContainer']) {

		const defWidth = settings.width;
		const defHeight = settings.height;

		let gameWidth = 0;
		let gameHeight = 0;

		if (App.isLandscape) {
			if ((window.innerWidth / window.innerHeight) < (defWidth / defHeight)) {
				gameWidth = defWidth;
				gameHeight= defHeight * (defWidth / defHeight) / (window.innerWidth / window.innerHeight);
			} else {
				gameWidth = defWidth * (window.innerWidth / window.innerHeight) / (defWidth / defHeight);
				gameHeight = defHeight;
			}
		} else {
			if ((window.innerWidth / window.innerHeight) < (defHeight / defWidth)) {
				gameWidth = defHeight;
				gameHeight = defWidth * (defHeight / defWidth) / (window.innerWidth / window.innerHeight);
			} else {
				gameWidth = defHeight * (window.innerWidth / window.innerHeight) / (defHeight / defWidth);
				gameHeight = defWidth;
			}
		}

		return [gameWidth, gameHeight];
	},

	getTexture(key) {

		return PIXI.utils.TextureCache[key];
	},
}
