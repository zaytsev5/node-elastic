const Router = require('koa-router');
const customerQueries = require('../database/queries/customers');
const DbService = require('../database/scripts/update')



const BASE_URL = '/api/customers';
const UPDATE_URL = '/api/customers/update'
const router = new Router();
let index =0
router.get(BASE_URL, async (ctx) => {
    try {
        
		const customers = await customerQueries.all(page, limit, search);
        const customersCount = await customerQueries.count(search);
        ctx.set('Access-Control-Expose-Headers', 'x-total-count');
        ctx.set('x-total-count', customersCount.count);
	ctx.body = customers
            .map(customer => customer.dataValues)
    } catch(err) {
        console.log(err);
        ctx.status = 400;
    }
});

router.post(UPDATE_URL, async (ctx) =>{
		try{
		    const { value, id } = ctx.request.query
		    await DbService.update(id,value)
		    
		    console.log('OK')
		    ctx.body = 'update OK';
		}catch(e){
		    console.log(e.message)
		}
})

module.exports = router;
