/*This file was created using the base rate function@(x)1/5+x*0and the cause functionsas well as the preventative functions@(x)exp(-x/4)at time10with parameter1,@(x)exp(-x/4)at time17with parameter1,*/
 
 var dTimes=[10,17];
 var lightOrderP=[28,40,9,13,34,33,24,21,28,32,11,21,18,35,4,36,39,32,22,26,40,40,11,5,16,15,13,6,2,28,37,8,32,11,35,9,1,13,37,13,14,40,9,33,15,30,24,6,2,23,4,16,36,1,23,37,37,32,38,9,14,12,18,24,5,30,36,20,5,3,9,20,21,39,14,16,22,13,25,25,21,22,7,32,13,24,38,37,22,38,2,26,6,11,34,40,30,15,1,11,33,26,12,11,21,3,7,40,2,5,10,33,39,36,2,17,24,33,3,3,25,13,4,17,36,4,8,20,28,2,19,39,15,37,14,17,29,10,13,7,4,10,19,6,27,30,10,15,3,35,38,3,7,33,16,23,19,28,12,30,9,14,3,39,5,40,16,29,18,24,27,10,30,8,11,22,3,38,17,6,12,5,13,14,14,1,11,29,19,27,22,9,14,36,26,26,10,15,13,28,13,29,26,9,35,4,18,4,24,33,15,8,40,13,31,25,20,10,14,7,31,3,10,27,27,24,33,29,22,20,23,39,25,15,9,1,5,31,20,23,10,38,12,1,2,31,34,12,23,16,29,30,26,37,23,33,39,17,16,5,3,23,23,24,8,22,18,30,3,31,6,17,18,26,15,31,11,30,38,6,27,38,10,4,14,6,2,35,18,7,20,11,40,17,37,29,13,29,39,7,28,28,11,17,26,38,4,22,35,17,23,34,37,20,7,30,20,32,25,12,13,35,40,28,37,26,4,8,19,27,35,40,31,24,31,40,33,15,22,19,36,3,12,20,21,9,6,32,30,18,23,28,25,28,28,33,36,27,38,18,5,24,20,22,33,29,28,1,3,12,20,6,6,16,23,18,29,32,20,3,1,15,20,29,32,39,32,38,20,1]; 
 var eTimesP=[[0.18],[0.46],[0.66],[0.7],[0.74],[0.86],[0.92],[1.08],[1.18,1.18],[1.24],[1.36],[1.42],[1.46],[1.58],[2],[2.02],[2.22],[2.48],[2.7],[2.76],[2.8],[2.88],[2.96],[3],[3.1],[3.14],[3.16],[3.26],[3.28],[3.5],[3.62],[4.34],[4.42],[4.46],[4.54],[4.9],[4.92],[5],[5.14],[5.28],[5.46],[5.5],[5.52],[5.56],[5.58],[5.8],[5.82],[5.84],[5.92],[5.98],[6.1],[6.2],[6.28],[6.34],[6.48,6.48],[7.3],[7.86],[7.94],[8.06],[8.08],[8.18,8.18],[8.38],[8.42],[8.58],[8.62],[8.98],[9.04],[9.68],[9.88],[10.24],[11.02],[11.22],[11.96],[12.26],[12.54],[12.82],[13],[13.02],[13.58],[13.7],[13.82],[14.12],[14.28],[14.62],[14.66],[14.74],[15.08],[15.5,15.5],[15.52],[15.58,15.58],[15.62],[15.88],[15.94],[16.14],[16.24],[16.4],[16.56],[16.76],[16.96],[17],[18.48],[18.88],[19.52],[19.74],[19.98],[20.14],[20.9],[20.92],[20.94],[21],[21.14],[21.22],[21.46],[21.54,21.54],[21.64],[22.2],[22.24],[22.5,22.5],[23.32],[23.76],[24.24],[24.3],[24.98],[25.32],[25.56],[25.58,25.58],[25.84],[25.88],[26],[26.26],[26.28],[26.42],[26.6],[26.64],[27.18],[27.22],[27.24],[27.64],[27.72],[27.96],[28.06],[28.14,28.14],[28.18],[28.32,28.32],[28.74],[28.86],[29.08,29.08],[29.26],[29.44],[29.52],[29.66],[29.84],[29.94],[29.98],[30.26],[30.28,30.28],[30.4,30.4],[30.46],[30.48],[30.5],[30.76],[30.9],[31.08],[31.2],[31.42],[31.44],[31.48],[31.5],[31.56],[31.68],[31.94],[31.96],[32],[32.18],[32.34],[32.46,32.46],[32.5],[32.56],[32.84],[32.98],[33],[33.14],[33.34],[33.62],[33.7],[33.72],[33.78],[34.06],[34.1],[34.18,34.18],[34.28],[34.3],[34.54],[34.86],[35.24],[35.44],[35.54,35.54],[35.8],[35.84],[35.96],[36.08],[36.3],[36.32],[36.4],[36.42],[36.58],[36.62,36.62],[36.68],[36.92],[37.02],[37.08],[37.28],[37.36],[37.54],[37.64],[37.74],[37.9],[38.04],[38.16],[38.34],[38.4],[38.52],[38.64],[38.7],[38.74],[38.9],[38.98],[39.02,39.02,39.02],[39.16],[39.44],[39.54],[39.98,39.98],[40.1],[40.18],[40.48],[40.68],[40.7],[40.72],[40.78],[40.9],[41.16],[41.42],[41.52],[41.56],[41.6],[41.64],[41.78],[41.84],[41.92],[41.94],[42.04],[42.44],[42.54],[42.86],[43.02],[43.36],[43.66,43.66],[43.68],[43.88],[43.96],[44.02],[44.36],[44.42,44.42],[44.46],[44.6,44.6],[44.76],[44.9],[44.92],[44.94],[45.2],[45.28],[45.32],[45.6],[45.62],[45.76],[45.82],[45.96],[46,46],[46.18],[46.2],[46.42],[46.58],[46.62],[46.68],[46.96],[47.34],[47.36],[47.56],[47.64],[47.68],[47.78],[47.98],[48.06],[48.12],[48.58],[48.7],[49.48,49.48],[50.26],[50.56],[50.68],[50.98],[51.12],[51.3,51.3],[51.38,51.38],[51.46],[51.48],[51.56],[51.72],[51.74],[51.96],[52.3],[52.4],[53],[53.04],[53.28,53.28],[53.44],[53.64],[53.68],[53.82],[53.86],[54],[54.66],[54.72],[54.8],[55.22],[55.3],[55.46],[55.6],[55.62],[55.72],[55.76],[55.84],[56.12],[56.14],[56.26],[56.4,56.4],[56.64],[57.04],[57.64],[57.66],[57.74,57.74],[57.88],[57.92],[58.02],[58.26],[58.66,58.66],[58.72],[58.76],[58.84],[59.08,59.08],[59.26],[59.28],[59.34,59.34],[59.52],[59.74],[59.88],[100]];
 var lightOrderBR=[20,33,18,1,29,30,6,24,29,18,3,35,4,39,18,39,7,10,31,21,15,12,2,9,20,10,26,2,14,21,29,1,6,31,26,40,18,13,20,12,8,38,19,25,25,26,34,1,37,15,24,29,6,20,24,39,4,23,24,20,37,24,35,38,35,32,38,35,14,13,11,32,40,14,35,11,2,24,19,1,2,39,12,40,29,29,23,3,22,37,29,15,33,35,4,10,25,1,2,16,10,30,37,28,6,8,21,38,38,24,18,2,11,2,13,33,29,31,29,33,13,27,6,5,8,21,33,22,32,22,30,19,22,23,13,10,27,38,8,19,39,31,39,19,31,35,10,6,7,31,28,21,18,26,32,3,4,2,40,20,21,19,27,19,15,4,30,38,35,38,39,39,38,23,15,11,21,2,10,25,33,13,35,31,31,29,34,12,31,1,25,28,27,32,33,24,8,11,38,27,27,27,12,36,16,39,17,13,10,21,24,10,12,24,26,27,3,13,28,21,40,23,11,32,4,37,31,29,34,1,6,8,19,31,16,22,20,27,19,12,26,22,38,1,29,17,31,34,6,2,25,2,25,14,29,17,2,35,35,35,22,4,29,4,4,22,5,1,20,22,1,3,35,38,14,6,32,30,25,21,36,33,9,1,20,10,34,21,27,8,33,37,8,14,13,3,38,37,34,38,10,17,38,38,3,36,17,4,16,28,6,29,28,17,36,19,35,13,37,29,27,26,10,21,33,1,3,35,17,38,21,20,25,35,38,14,22,35,1,12,34,33,34,17,32,27,34,6,27,34,26,22,26,23,1,11,30,19,38,13,15,16,17,35,40,34,17,31,37,40,20,10,39,3,17,36,7,6,20,23,18,23,8,17,38,10,16,25,14,28,37,32,18,37,6,26,21,29,6,29,20,31,39,24,18,17,24,38,19,10,31,22,24,39,5,40,33,2,8,23,34,35,28,23,12,34,3,15,22,38,21,2,2,34,2,9,37,23,5,7,14,21,13,31,3,1,30,2,24,29,5,5,20,10,10,11,11,6,20,22,33,36,22,14,1]; 
 var eTimesBR=[[0],[0.04],[0.14],[0.24,0.24],[0.28],[0.46],[0.48],[0.58],[0.78],[0.82],[1.3],[1.46],[1.74],[1.96],[2.02],[2.06],[2.1,2.1],[2.16],[2.2],[2.4],[2.86],[2.88],[3.04],[3.1],[3.16],[3.36],[3.48],[3.52],[3.8],[3.82],[3.86,3.86],[3.94],[4],[4.08],[4.12],[4.14],[4.24],[4.32],[4.64],[4.66],[4.72],[4.96],[4.98],[5],[5.02,5.02],[5.12],[5.16],[5.28],[5.3],[5.34],[5.7],[5.74],[5.9],[6.84],[7.2],[7.36],[7.4],[7.42,7.42],[7.44],[7.46],[7.48],[7.52],[7.62],[7.74],[7.76],[7.92],[7.94],[8],[8.06,8.06],[8.38],[8.4,8.4],[8.68],[8.7],[8.78],[8.92],[9.46],[9.6],[9.62],[9.9],[10.8],[10.82],[11.26],[11.5],[11.64],[12.06],[12.12],[12.22],[12.42],[12.58],[12.76],[13.12],[13.14,13.14],[13.16,13.16],[13.28],[13.42],[13.52],[13.82],[13.88],[13.98,13.98],[14.12],[14.36],[14.54],[14.56],[14.6],[14.62],[14.74],[14.76,14.76],[14.78],[14.86],[14.98],[15.04],[15.06],[15.08],[15.12],[15.22],[15.4],[15.44],[15.52],[15.82],[15.94],[16.06],[16.1],[16.18],[16.28],[16.52],[16.56],[16.58],[16.76],[17.16],[17.38],[17.44],[17.54],[17.62],[17.86],[17.92],[18.04],[18.18,18.18],[18.2],[18.3],[18.4],[18.44],[18.56],[18.66],[18.72],[18.78],[18.8],[18.86],[18.94],[19.2],[19.3,19.3],[19.34],[19.58],[19.68],[19.74],[20.22],[20.3],[20.34],[20.46],[20.5],[20.6],[20.86],[20.96],[21.18],[21.34],[21.38],[21.74],[21.88,21.88],[22],[22.08],[22.14],[22.2],[22.38],[22.5],[22.66],[23.08],[23.5],[23.7],[23.8],[24,24],[24.06],[24.32],[24.34],[24.58],[24.68],[24.74],[24.82],[24.88],[24.94,24.94],[25.22],[25.26],[25.46],[25.5],[25.58,25.58,25.58],[25.86],[25.88],[25.9],[25.94],[25.98],[26.44],[26.7,26.7],[26.78],[26.82],[26.9],[27.3],[27.48],[27.58],[27.68],[27.78],[27.88,27.88],[28.02],[28.2],[28.36],[28.38],[28.44],[28.58],[29.02],[29.22],[29.52],[29.9],[29.98,29.98],[30.18,30.18],[30.42],[30.54],[30.78],[30.96,30.96],[31.38],[31.52],[31.56],[31.64],[31.72],[31.76],[31.8],[31.82],[32.06],[32.08],[32.16],[32.2],[32.3],[32.34],[32.46],[32.64],[32.72],[32.76],[32.86],[32.98],[33.34],[33.4],[33.42],[33.44],[33.54],[33.68],[33.76],[33.84],[33.9],[33.94],[33.98],[34.14],[34.2],[34.22],[34.4],[34.5],[34.56],[35.06],[35.14],[35.58],[35.76],[35.8],[35.82],[35.92],[35.96],[36.02],[36.16],[36.26],[36.44],[36.48],[36.58],[36.64],[36.76,36.76],[36.8],[36.88],[37.1],[37.34],[37.62],[37.68],[37.72],[37.76],[37.78],[37.92],[37.98],[38.1],[38.16],[38.6],[38.76],[38.82],[39.36],[39.38],[39.46],[39.72],[39.78,39.78],[39.96],[40.04,40.04],[40.44],[40.72],[41],[41.1],[41.16],[41.42],[41.66],[41.94],[42.08],[42.32],[42.62],[42.7],[42.76],[42.9],[43.04],[43.12],[43.18],[43.34],[43.4],[43.56],[43.6],[43.78],[43.82],[43.84],[43.88],[44.14],[44.22],[44.72],[44.96],[45.02],[45.22],[45.28],[45.46],[45.52],[45.58],[45.68],[45.72],[46],[46.12],[46.16],[46.54],[46.56],[46.62],[46.7],[46.76],[46.94],[47.04,47.04,47.04],[47.06],[47.08],[47.12],[47.3],[47.36],[47.74],[47.92],[47.96],[47.98],[48.04],[48.18,48.18],[48.48],[49.4],[49.5],[49.54],[49.64],[49.7],[49.98],[50.16],[50.34],[50.44],[50.54],[50.72],[50.78],[51.04],[51.08],[51.44],[51.78],[51.82],[51.86],[51.88],[51.9],[51.92],[52.04],[52.12],[52.34],[52.48],[52.74],[53.36],[53.46],[53.68],[53.74],[54.02],[54.14],[54.18],[54.28],[54.48],[54.9,54.9],[55],[55.32],[55.34],[55.62],[55.8],[56.02],[56.22],[56.5],[56.76],[56.8],[56.84],[57.02],[57.06],[57.22],[57.32],[57.42],[57.46],[57.6],[57.66],[57.72],[57.74],[58],[58.2],[58.22],[58.28],[58.52],[58.6],[58.68],[58.76],[58.9],[58.92],[59.22],[59.24],[59.26],[59.3],[59.38],[59.44],[59.8],[100]];