"use strict"
import indexmodule from "../models/moudle";
const indexController={
	index(){
		return async(ctx,next)=>{
			ctx.body = await ctx.render('index.html',{
				title:'大拇指点赞页面'
			})
		}
	},
	update(){
		return async(ctx,next)=>{
			const indexM=new indexmodule();
			const data = await indexM.updatenum();
			ctx.body = data;
				}
		}
	}


export default indexController;