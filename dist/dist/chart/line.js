define("echarts/chart/line",["require","./base","zrender/shape/Polyline","../util/shape/Icon","../util/shape/HalfSmoothPolygon","../component/axis","../component/grid","../component/dataZoom","../config","../util/ecData","zrender/tool/util","zrender/tool/color","../chart"],function(t){function e(t,e,i,n,r){o.call(this,t,e,i,n,r),this.refresh(n)}function i(t,e,i){var o=e.x,n=e.y,s=e.width,a=e.height,h=a/2;e.symbol.match("empty")&&(t.fillStyle="#fff"),e.brushType="both";var l=e.symbol.replace("empty","").toLowerCase();l.match("star")?(h=l.replace("star","")-0||5,n-=1,l="star"):("rectangle"===l||"arrow"===l)&&(o+=(s-a)/2,s=a);var c="";if(l.match("image")&&(c=l.replace(new RegExp("^image:\\/\\/"),""),l="image",o+=Math.round((s-a)/2)-1,s=a+=2),l=r.prototype.iconLibrary[l]){var d=e.x,p=e.y;t.moveTo(d,p+h),t.lineTo(d+5,p+h),t.moveTo(d+e.width-5,p+h),t.lineTo(d+e.width,p+h);var u=this;l(t,{x:o+4,y:n+4,width:s-8,height:a-8,n:h,image:c},function(){u.modSelf(),i()})}else t.moveTo(o,n+h),t.lineTo(o+s,n+h)}var o=t("./base"),n=t("zrender/shape/Polyline"),r=t("../util/shape/Icon"),s=t("../util/shape/HalfSmoothPolygon");t("../component/axis"),t("../component/grid"),t("../component/dataZoom");var a=t("../config");a.line={zlevel:0,z:2,clickable:!0,legendHoverLink:!0,xAxisIndex:0,yAxisIndex:0,itemStyle:{normal:{label:{show:!1},lineStyle:{width:2,type:"solid",shadowColor:"rgba(0,0,0,0)",shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0}},emphasis:{label:{show:!1}}},symbolSize:2,showAllSymbol:!1};var h=t("../util/ecData"),l=t("zrender/tool/util"),c=t("zrender/tool/color");return e.prototype={type:a.CHART_TYPE_LINE,_buildShape:function(){this.finalPLMap={},this._buildPosition()},_buildHorizontal:function(t,e,i,o){for(var n,r,s,a,h,l,c,d,p,u=this.series,f=i[0][0],g=u[f],m=this.component.xAxis.getAxis(g.xAxisIndex||0),_={},y=0,v=e;v>y&&null!=m.getNameByIndex(y);y++){r=m.getCoordByIndex(y);for(var x=0,b=i.length;b>x;x++){n=this.component.yAxis.getAxis(u[i[x][0]].yAxisIndex||0),h=a=c=l=n.getCoord(0);for(var T=0,S=i[x].length;S>T;T++)f=i[x][T],g=u[f],d=g.data[y],p=this.getDataFromOption(d,"-"),_[f]=_[f]||[],o[f]=o[f]||{min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY,sum:0,counter:0,average:0},"-"!==p?(p>=0?(a-=T>0?n.getCoordSize(p):h-n.getCoord(p),s=a):0>p&&(l+=T>0?n.getCoordSize(p):n.getCoord(p)-c,s=l),_[f].push([r,s,y,m.getNameByIndex(y),r,h]),o[f].min>p&&(o[f].min=p,o[f].minY=s,o[f].minX=r),o[f].max<p&&(o[f].max=p,o[f].maxY=s,o[f].maxX=r),o[f].sum+=p,o[f].counter++):_[f].length>0&&(this.finalPLMap[f]=this.finalPLMap[f]||[],this.finalPLMap[f].push(_[f]),_[f]=[])}a=this.component.grid.getY();for(var z,x=0,b=i.length;b>x;x++)for(var T=0,S=i[x].length;S>T;T++)f=i[x][T],g=u[f],d=g.data[y],p=this.getDataFromOption(d,"-"),"-"==p&&this.deepQuery([d,g,this.option],"calculable")&&(z=this.deepQuery([d,g],"symbolSize"),a+=2*z+5,s=a,this.shapeList.push(this._getCalculableItem(f,y,m.getNameByIndex(y),r,s,"horizontal")))}for(var C in _)_[C].length>0&&(this.finalPLMap[C]=this.finalPLMap[C]||[],this.finalPLMap[C].push(_[C]),_[C]=[]);this._calculMarkMapXY(o,i,"y"),this._buildBorkenLine(t,this.finalPLMap,m,"horizontal")},_buildVertical:function(t,e,i,o){for(var n,r,s,a,h,l,c,d,p,u=this.series,f=i[0][0],g=u[f],m=this.component.yAxis.getAxis(g.yAxisIndex||0),_={},y=0,v=e;v>y&&null!=m.getNameByIndex(y);y++){s=m.getCoordByIndex(y);for(var x=0,b=i.length;b>x;x++){n=this.component.xAxis.getAxis(u[i[x][0]].xAxisIndex||0),h=a=c=l=n.getCoord(0);for(var T=0,S=i[x].length;S>T;T++)f=i[x][T],g=u[f],d=g.data[y],p=this.getDataFromOption(d,"-"),_[f]=_[f]||[],o[f]=o[f]||{min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY,sum:0,counter:0,average:0},"-"!==p?(p>=0?(a+=T>0?n.getCoordSize(p):n.getCoord(p)-h,r=a):0>p&&(l-=T>0?n.getCoordSize(p):c-n.getCoord(p),r=l),_[f].push([r,s,y,m.getNameByIndex(y),h,s]),o[f].min>p&&(o[f].min=p,o[f].minX=r,o[f].minY=s),o[f].max<p&&(o[f].max=p,o[f].maxX=r,o[f].maxY=s),o[f].sum+=p,o[f].counter++):_[f].length>0&&(this.finalPLMap[f]=this.finalPLMap[f]||[],this.finalPLMap[f].push(_[f]),_[f]=[])}a=this.component.grid.getXend();for(var z,x=0,b=i.length;b>x;x++)for(var T=0,S=i[x].length;S>T;T++)f=i[x][T],g=u[f],d=g.data[y],p=this.getDataFromOption(d,"-"),"-"==p&&this.deepQuery([d,g,this.option],"calculable")&&(z=this.deepQuery([d,g],"symbolSize"),a-=2*z+5,r=a,this.shapeList.push(this._getCalculableItem(f,y,m.getNameByIndex(y),r,s,"vertical")))}for(var C in _)_[C].length>0&&(this.finalPLMap[C]=this.finalPLMap[C]||[],this.finalPLMap[C].push(_[C]),_[C]=[]);this._calculMarkMapXY(o,i,"x"),this._buildBorkenLine(t,this.finalPLMap,m,"vertical")},_buildOther:function(t,e,i,o){for(var n,r=this.series,s={},a=0,h=i.length;h>a;a++)for(var l=0,c=i[a].length;c>l;l++){var d=i[a][l],p=r[d];n=this.component.xAxis.getAxis(p.xAxisIndex||0);var u=this.component.yAxis.getAxis(p.yAxisIndex||0),f=u.getCoord(0);s[d]=s[d]||[],o[d]=o[d]||{min0:Number.POSITIVE_INFINITY,min1:Number.POSITIVE_INFINITY,max0:Number.NEGATIVE_INFINITY,max1:Number.NEGATIVE_INFINITY,sum0:0,sum1:0,counter0:0,counter1:0,average0:0,average1:0};for(var g=0,m=p.data.length;m>g;g++){var _=p.data[g],y=this.getDataFromOption(_,"-");if(y instanceof Array){var v=n.getCoord(y[0]),x=u.getCoord(y[1]);s[d].push([v,x,g,y[0],v,f]),o[d].min0>y[0]&&(o[d].min0=y[0],o[d].minY0=x,o[d].minX0=v),o[d].max0<y[0]&&(o[d].max0=y[0],o[d].maxY0=x,o[d].maxX0=v),o[d].sum0+=y[0],o[d].counter0++,o[d].min1>y[1]&&(o[d].min1=y[1],o[d].minY1=x,o[d].minX1=v),o[d].max1<y[1]&&(o[d].max1=y[1],o[d].maxY1=x,o[d].maxX1=v),o[d].sum1+=y[1],o[d].counter1++}}}for(var b in s)s[b].length>0&&(this.finalPLMap[b]=this.finalPLMap[b]||[],this.finalPLMap[b].push(s[b]),s[b]=[]);this._calculMarkMapXY(o,i,"xy"),this._buildBorkenLine(t,this.finalPLMap,n,"other")},_buildBorkenLine:function(t,e,i,o){for(var r,a="other"==o?"horizontal":o,d=this.series,p=t.length-1;p>=0;p--){var u=t[p],f=d[u],g=e[u];if(f.type===this.type&&null!=g)for(var m=this._getBbox(u,a),_=this._sIndex2ColorMap[u],y=this.query(f,"itemStyle.normal.lineStyle.width"),v=this.query(f,"itemStyle.normal.lineStyle.type"),x=this.query(f,"itemStyle.normal.lineStyle.color"),b=this.getItemStyleColor(this.query(f,"itemStyle.normal.color"),u,-1),T=null!=this.query(f,"itemStyle.normal.areaStyle"),S=this.query(f,"itemStyle.normal.areaStyle.color"),z=0,C=g.length;C>z;z++){var w=g[z],E="other"!=o&&this._isLarge(a,w);if(E)w=this._getLargePointList(a,w);else for(var L=0,A=w.length;A>L;L++)r=f.data[w[L][2]],(this.deepQuery([r,f,this.option],"calculable")||this.deepQuery([r,f],"showAllSymbol")||"categoryAxis"===i.type&&i.isMainAxis(w[L][2])&&"none"!=this.deepQuery([r,f],"symbol"))&&this.shapeList.push(this._getSymbol(u,w[L][2],w[L][3],w[L][0],w[L][1],a));var M=new n({zlevel:this.getZlevelBase(),z:this.getZBase(),style:{miterLimit:y,pointList:w,strokeColor:x||b||_,lineWidth:y,lineType:v,smooth:this._getSmooth(f.smooth),smoothConstraint:m,shadowColor:this.query(f,"itemStyle.normal.lineStyle.shadowColor"),shadowBlur:this.query(f,"itemStyle.normal.lineStyle.shadowBlur"),shadowOffsetX:this.query(f,"itemStyle.normal.lineStyle.shadowOffsetX"),shadowOffsetY:this.query(f,"itemStyle.normal.lineStyle.shadowOffsetY")},hoverable:!1,_main:!0,_seriesIndex:u,_orient:a});if(h.pack(M,d[u],u,0,z,d[u].name),this.shapeList.push(M),T){var k=new s({zlevel:this.getZlevelBase(),z:this.getZBase(),style:{miterLimit:y,pointList:l.clone(w).concat([[w[w.length-1][4],w[w.length-1][5]],[w[0][4],w[0][5]]]),brushType:"fill",smooth:this._getSmooth(f.smooth),smoothConstraint:m,color:S?S:c.alpha(_,.5)},highlightStyle:{brushType:"fill"},hoverable:!1,_main:!0,_seriesIndex:u,_orient:a});h.pack(k,d[u],u,0,z,d[u].name),this.shapeList.push(k)}}}},_getBbox:function(t,e){var i=this.component.grid.getBbox(),o=this.xMarkMap[t];return null!=o.minX0?[[Math.min(o.minX0,o.maxX0,o.minX1,o.maxX1),Math.min(o.minY0,o.maxY0,o.minY1,o.maxY1)],[Math.max(o.minX0,o.maxX0,o.minX1,o.maxX1),Math.max(o.minY0,o.maxY0,o.minY1,o.maxY1)]]:("horizontal"===e?(i[0][1]=Math.min(o.minY,o.maxY),i[1][1]=Math.max(o.minY,o.maxY)):(i[0][0]=Math.min(o.minX,o.maxX),i[1][0]=Math.max(o.minX,o.maxX)),i)},_isLarge:function(t,e){return e.length<2?!1:"horizontal"===t?Math.abs(e[0][0]-e[1][0])<.5:Math.abs(e[0][1]-e[1][1])<.5},_getLargePointList:function(t,e){var i;i="horizontal"===t?this.component.grid.getWidth():this.component.grid.getHeight();for(var o=e.length,n=[],r=0;i>r;r++)n[r]=e[Math.floor(o/i*r)];return n},_getSmooth:function(t){return t?.3:0},_getCalculableItem:function(t,e,i,o,n,r){var s=this.series,h=s[t].calculableHolderColor||this.ecTheme.calculableHolderColor||a.calculableHolderColor,l=this._getSymbol(t,e,i,o,n,r);return l.style.color=h,l.style.strokeColor=h,l.rotation=[0,0],l.hoverable=!1,l.draggable=!1,l.style.text=void 0,l},_getSymbol:function(t,e,i,o,n,r){var s=this.series,a=s[t],h=a.data[e],l=this.getSymbolShape(a,t,h,e,i,o,n,this._sIndex2ShapeMap[t],this._sIndex2ColorMap[t],"#fff","vertical"===r?"horizontal":"vertical");return l.zlevel=this.getZlevelBase(),l.z=this.getZBase()+1,this.deepQuery([h,a,this.option],"calculable")&&(this.setCalculable(l),l.draggable=!0),l},getMarkCoord:function(t,e){var i=this.series[t],o=this.xMarkMap[t],n=this.component.xAxis.getAxis(i.xAxisIndex),r=this.component.yAxis.getAxis(i.yAxisIndex);if(e.type&&("max"===e.type||"min"===e.type||"average"===e.type)){var s=null!=e.valueIndex?e.valueIndex:null!=o.maxX0?"1":"";return[o[e.type+"X"+s],o[e.type+"Y"+s],o[e.type+"Line"+s],o[e.type+s]]}return["string"!=typeof e.xAxis&&n.getCoordByIndex?n.getCoordByIndex(e.xAxis||0):n.getCoord(e.xAxis||0),"string"!=typeof e.yAxis&&r.getCoordByIndex?r.getCoordByIndex(e.yAxis||0):r.getCoord(e.yAxis||0)]},refresh:function(t){t&&(this.option=t,this.series=t.series),this.backupShapeList(),this._buildShape()},ontooltipHover:function(t,e){for(var i,o,n=t.seriesIndex,r=t.dataIndex,s=n.length;s--;)if(i=this.finalPLMap[n[s]])for(var a=0,h=i.length;h>a;a++){o=i[a];for(var l=0,c=o.length;c>l;l++)r===o[l][2]&&e.push(this._getSymbol(n[s],o[l][2],o[l][3],o[l][0],o[l][1],"horizontal"))}},addDataAnimation:function(t){for(var e=this.series,i={},o=0,n=t.length;n>o;o++)i[t[o][0]]=t[o];for(var r,s,a,h,l,c,d,o=this.shapeList.length-1;o>=0;o--)if(l=this.shapeList[o]._seriesIndex,i[l]&&!i[l][3]){if(this.shapeList[o]._main&&this.shapeList[o].style.pointList.length>1){if(c=this.shapeList[o].style.pointList,s=Math.abs(c[0][0]-c[1][0]),h=Math.abs(c[0][1]-c[1][1]),d="horizontal"===this.shapeList[o]._orient,i[l][2]){if("half-smooth-polygon"===this.shapeList[o].type){var p=c.length;this.shapeList[o].style.pointList[p-3]=c[p-2],this.shapeList[o].style.pointList[p-3][d?0:1]=c[p-4][d?0:1],this.shapeList[o].style.pointList[p-2]=c[p-1]}this.shapeList[o].style.pointList.pop(),d?(r=s,a=0):(r=0,a=-h)}else{if(this.shapeList[o].style.pointList.shift(),"half-smooth-polygon"===this.shapeList[o].type){var u=this.shapeList[o].style.pointList.pop();d?u[0]=c[0][0]:u[1]=c[0][1],this.shapeList[o].style.pointList.push(u)}d?(r=-s,a=0):(r=0,a=h)}this.zr.modShape(this.shapeList[o].id,{style:{pointList:this.shapeList[o].style.pointList}},!0)}else{if(i[l][2]&&this.shapeList[o]._dataIndex===e[l].data.length-1){this.zr.delShape(this.shapeList[o].id);continue}if(!i[l][2]&&0===this.shapeList[o]._dataIndex){this.zr.delShape(this.shapeList[o].id);continue}}this.shapeList[o].position=[0,0],this.zr.animate(this.shapeList[o].id,"").when(this.query(this.option,"animationDurationUpdate"),{position:[r,a]}).start()}}},r.prototype.iconLibrary.legendLineIcon=i,l.inherits(e,o),t("../chart").define("line",e),e});