'use strict'
let Qrcode = require('qrcode')

let testObj = {
	seller : 'Valuetens Records',
	vatRegNumber : '310122393500003',
	timeStamp : '2021-11-29T10:55:00Z',
	totalAmount : '100',
	vatAmount : '15'
}

// Final Buff Obj
let finalBuf = null


// CAlcualtion for each value in the Taged list
function getTlvForValue(tagNum, tagValue) {
	var tagNumBuf = Buffer.from([tagNum], 'utf8')
	var tagValueLenBuf = Buffer.from([tagValue.length], 'utf8')
	var tagValueBuf = Buffer.from(tagValue, 'utf8')

	var arrBuff = [tagNumBuf, tagValueLenBuf, tagValueBuf]
	return Buffer.concat(arrBuff)
}

// Concat and get final buf
function setFinalBuf(obj) {
	let tagsBufs = []
	for(var i=0; i<Object.keys(obj).length; i++) {
		let key = Object.keys(obj)[i]
		tagsBufs.push(getTlvForValue(String(i+1), obj[key]))
	}
	finalBuf =  Buffer.concat(tagsBufs)
}

// Hex String
exports.toHex = function(obj) {
	if(!obj) return null
	setFinalBuf(obj)
	return finalBuf.toString('hex')
}

// Base64 String
exports.toBase64 =  function(obj) {
	if(!obj) return null
	setFinalBuf(obj)
	return finalBuf.toString('base64')
}

//Qr code image as base64
exports.toQrCode = async function(obj) {
	if(!obj) return null
	let qr = await Qrcode.toDataURL(exports.toBase64(obj))
	return new Promise((res, rej) => {
		res(qr)
	})
}


//console.log(exports.toHex(testObj))
//console.log(exports.toBase64(testObj))
//exports.toQrCode(testObj).then(d => {console.log(d)})

