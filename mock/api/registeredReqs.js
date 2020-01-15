const Mock = require('mockjs')

let departments = [
	{'id':001,'name':'门诊',rooms:[]},
	{'id':002,'name':'外科',rooms:[]},
	{'id':003,'name':'内科',rooms:[]},
	{'id':004,'name':'妇科',rooms:[]},
	{'id':005,'name':'男科',rooms:[]},
	{'id':006,'name':'男科',rooms:[]},
];

module.exports = {
	getDepartmentsList:config=>{
		return {
			code:0 ,
			msg:'success',
			data:departments
		}
	}
} ;
