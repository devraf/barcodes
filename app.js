//Text area list for barcodes
var barcodeTextAreaInput = document.querySelector('#barcodeTextAreaInput');
var barcodeList = '';

//img tag classes to use JsBarcode
var imgClassList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
                     'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a1', 'b1', 'c1', 'd1', 'e1', 'f1',
					 'g1', 'h1', 'i1', 'j1', 'k1', 'l1', 'm1', 'n1', 'o1', 'p1', 'q1', 'r1', 's1', 't1',
					 'u1', 'v1', 'w1', 'x1', 'y1', 'z1', 'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
					 'i2', 'j2', 'k2', 'l2', 'm2', 'n2', 'o2', 'p2', 'q2', 'r2', 's2', 't2', 'u2', 'v2',
					 'w2', 'x2', 'y2', 'z2', 'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3', 'i3', 'j3',
					 'k3', 'l3', 'm3', 'n3', 'o3', 'p3', 'q3', 'r3', 's3', 't3', 'u3', 'v3', 'w3', 'x3',
					 'y3', 'z3', 'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4', 'i4', 'j4', 'k4', 'l4',
					 'm4', 'n4', 'o4', 'p4', 'q4', 'r4', 's4', 't4', 'u4', 'v4', 'w4', 'x4', 'y4', 'z4',
					 'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5', 'i5', 'j5', 'k5', 'l5', 'm5', 'n5',
					 'o5', 'p5', 'q5', 'r5', 's5', 't5', 'u5', 'v5', 'w5', 'x5', 'y5', 'z5', 'a6', 'b6',
					 'c6', 'd6', 'e6', 'f6', 'g6', 'h6', 'i6', 'j6', 'k6', 'l6', 'm6', 'n6', 'o6', 'p6',
					 'q6', 'r6', 's6', 't6', 'u6', 'v6', 'w6', 'x6', 'y6', 'z6', 'a7', 'b7', 'c7', 'd7',
					 'e7', 'f7', 'g7', 'h7', 'i7', 'j7', 'k7', 'l7', 'm7', 'n7', 'o7', 'p7', 'q7', 'r7',
					 's7', 't7', 'u7', 'v7', 'w7', 'x7', 'y7', 'z7', 'a8', 'b8', 'c8', 'd8', 'e8', 'f8',
					 'g8', 'h8', 'i8', 'j8', 'k8', 'l8', 'm8', 'n8', 'o8', 'p8', 'q8', 'r8', 's8', 't8',
					 'u8', 'v8', 'w8', 'x8', 'y8', 'z8', 'a9', 'b9', 'c9', 'd9', 'e9', 'f9', 'g9', 'h9',
					 'i9', 'j9', 'k9', 'l9', 'm9', 'n9', 'o9', 'p9', 'q9', 'r9', 's9', 't9', 'u9', 'v9',
					 'w9', 'x9', 'y9', 'z9', 'a10', 'b10', 'c10', 'd10', 'e10', 'f10', 'g10', 'h10',
					 'i10', 'j10', 'k10', 'l10', 'm10', 'n10', 'o10', 'p10', 'q10', 'r10', 's10', 't10',
					 'u10', 'v10', 'w10', 'x10', 'y10', 'z10', 'a11', 'b11', 'c11', 'd11', 'e11', 'f11',
					 'g11', 'h11', 'i11', 'j11', 'k11', 'l11', 'm11', 'n11', 'o11', 'p11', 'q11', 'r11',
					 's11', 't11', 'u11', 'v11', 'w11', 'x11', 'y11', 'z11', 'a12', 'b12', 'c12', 'd12',
					 'e12', 'f12', 'g12', 'h12', 'i12', 'j12', 'k12', 'l12', 'm12', 'n12', 'o12', 'p12',
					 'q12', 'r12', 's12', 't12', 'u12', 'v12', 'w12', 'x12', 'y12', 'z12',
                    ];

// color list for div separators
var separatorColorList = ['#00A4B4', '#538000', '#FF8F00', '#FF6138'];

//Barcode generator functions list
var multiBarcodeGenerator = {
	updateBarcodeList: function() {
		var barcodeTextAreaInput = document.querySelector('#barcodeTextAreaInput');
		barcodeList = barcodeTextAreaInput.value.trim().split('\n');
	},
	barcodeLimit: function(){
		if(barcodeList.length > imgClassList.length){
			for(var i = barcodeList.length; i > imgClassList.length; i--) {
				barcodeList.pop();
			}	
		}
	},
	createBarcodes: function() {
		for(var i = 0; i < barcodeList.length; i++){
		JsBarcode(`.${imgClassList[i]}`, barcodeList[i], {
          width:1.4,
          height:100
        });
	}
	},
	clearBarcodeList: function() {
		barcodeList = '';
	},
	removeBarcodes: function() {
		view.removeImgTags();
		barcodeTextAreaInput.value = '';
	}
}
var handlers = {
		create: function() {
			var createBarcodesButton = document.querySelector('#createBarcodes');
			
			createBarcodesButton.addEventListener('click', function(){
			multiBarcodeGenerator.updateBarcodeList();
			multiBarcodeGenerator.barcodeLimit();
	
			view.addImgTags();
			view.addImgTagClass();
			
			//run add div every 15 barcodes
	
			multiBarcodeGenerator.createBarcodes();
			multiBarcodeGenerator.clearBarcodeList();
			});
		},
		remove: function () {
			var removeBarcodesButton = document.querySelector('#removeBarcodes');
			
			removeBarcodesButton.addEventListener('click', function(){
				multiBarcodeGenerator.removeBarcodes();
			});
		},
		scrollTop: function() {
			var scrollUpToTopButton = document.querySelector('#scrollUpToTop');
			
			scrollUpToTopButton.addEventListener('click', function(){
				window.scroll({
				top:0,
				behavior: 'instant'
				});
			})
		},
		start: function() {
			this.create();
			this.remove();
			this.scrollTop();
		}
}

var view = {
	createImgTags: function() {
		var img = document.createElement('img');
		var barcodeId = document.querySelector('#barcode');
		
		barcodeId.appendChild(img);
	},
	addImgTags: function() {
      for(var i = 0; i < barcodeList.length; i++){
		  this.createImgTags();
	  }
	},
	addImgTagClass: function() {
		var divParent = document.querySelector('#barcode');
		for(var i = 0; i < barcodeList.length; i++){
		  divParent.children[i].classList.add(imgClassList[i], 'addedImg');
		}
	},
	removeImgTags: function() {
		var divParent = document.querySelector('#barcode');
				
		for(var i = divParent.children.length; i > 0; i--) {
		  divParent.removeChild(divParent.lastChild);
		}
	}
/* 	//TODO
		// add class to div tags
		//give each dive tag a random color
	createGuideLines: function() {
		var divSeparator = document.createElement('div');
		var barcodeId = document.querySelector('#barcode');
		
		barcodeId.appendChild(divSeparator);
	},
	addGuideLines: function () {
		for(var i = 0; i < barcodeList.length; i++) {
				if(i % 15 === 0) {
					this.createGuideLines();
				}
			}
		} */
	}

handlers.start();