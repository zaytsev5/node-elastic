const Customer = require('../model/customer'); 

const update = async (_id, _val) => {
		console.log('got this far')
		try{
				await Customer.update(
				    { city: _val},
				    { where: { id : _id}}
				)
				console.log('OK')
		}catch(e){

				console.log(e.message)
		}
}

module.exports = {
    update
}
