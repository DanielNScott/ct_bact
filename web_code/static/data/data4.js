/*This file was created using the base rate function@(x)1/5+x*0and the cause functions@(x)1/8*exp(-x/4)at time10,@(x)1/8*exp(-x/4)at time17,as well as the preventative functions*/
 
 var dTimes=[10,17];
 var lightOrderP=[36,16,12,21,4,14,13,10,33,1,36,10,7,25,1,1,8,28,17,24,19,32,34,34,3,22,31,15,32,24,2,11,1,4,16,5,40,10,4,6,9,4,26,30,3,21,37,39,19,34,7,1,38,18,18,38,37,21,31,24,9,28,38,12,16,5,33,1,4,20,8,5,24,4,16,19,9,4,23,38,28,2,40,32,35,17,37,36,8,10,15,23,38,15,23,17,31,35,28,31,23,30,17,16,22,17,31,29,30,36,24,37,1,38,10,26,13,23,24,18,13,19,1,37,23,8,13,30,5,12,16,23,4,4,38,1,20,22,19,23,32,4,1,17,22,23,32,8,26,37,8,18,9,10,15,28,28,31,28,11,30,1,14,15,28,26,9,14,6,22,13,33,14,27,25,27,1,22,18,31,10,36,19,4,9,39,6,5,3,31,21,34,33,21,17,10,4,14,1,15,12,37,6,16,9,2,14,27,8,14,13,17,33,2,19,9,16,16,5,21,23,11,40,34,32,36,14,9,3,36,35,20,6,15,7,11,15,24,19,8,39,40,38,26,23,2,24,14,22,17,15,3,26,19,27,31,12,30,26,40,27,4,6,18,22,3,33,36,29,18,29,11,28,24,17,40,13,38,15,7,26,14,25,38,37,6,21,15,14,17,29,29,40,5,9,13,26,27,32,34,21,11,2,37,39,6,11,33,23,7,35,20,1,15,13,1,35,2,19,20,29,29,10,35,18,4,21,35,20,10,12,34,21,16,1,32,31,2,4,25,32,23,24,12,20,36,29,40,12,1,38,25,26,25,23,4,38,2,37,37,39,36,6,5,12,23,28,14,19,1,1,38,4,6,28,21,22,28,30,14,9,30,2,6,10,10,39,12,17,4,8,9,9,20,2,6,21,29,17,12,14,9,27,9,15,38,24,30,23,34,33,13,2,9,36,35,24,13,37,14,2,26,13,23,16,18,23,28,31,1,37,30,22,37,23,15,23,38,4,31,15,17,8,22,1,28,21,9,8,33,30,3,22,10,11,22,30,37,31,18,18,6,16,20,39,15,14,16,32,29,14,22,7,14,37,24,10,38,4,27,13,33,24,34,31,4,26,14,17,8,24,7,34,22,31,16,19,23,26,11,1,22,5,12,4,36,37,23,40,37,22,12,10,35,2,22,35,1]; 
 var eTimesP=[[0.22],[0.56],[0.68],[0.72],[0.94,0.94],[1.08],[1.22],[1.28],[1.52],[1.66],[1.92],[2.04],[2.14],[2.18],[2.32],[2.38,2.38],[2.42],[2.64],[2.68],[2.74],[2.8],[2.94],[3.2],[3.28],[3.34],[3.58],[3.62],[3.66],[3.78],[3.88],[3.94],[3.96],[3.98],[4.14],[4.22],[4.28],[4.42],[4.68],[4.72],[4.84],[4.92],[4.94],[5.06],[5.1],[5.6],[5.64],[5.84],[6.08],[6.22],[6.3],[6.42],[6.44],[6.46],[6.54],[6.56],[6.58,6.58],[6.6],[6.66,6.66],[6.72],[6.78],[6.86],[6.96],[7.1],[7.16],[7.24,7.24],[7.28],[7.4],[7.64],[7.72],[8.04,8.04],[8.08],[8.28,8.28],[8.3],[8.62],[8.74],[8.82],[8.9],[9.44],[9.5],[9.54],[9.56],[9.58],[9.8],[9.86],[9.9,9.9],[10],[10.12],[10.34],[10.36],[10.5],[10.52],[10.58],[10.64],[10.86],[10.96],[10.98],[11.28],[11.34,11.34],[11.38],[11.4],[11.58],[11.7],[11.74],[12.02],[12.1],[12.14],[12.32],[12.36],[12.42],[12.46],[12.48],[12.5],[12.52],[12.56],[12.58],[12.7],[12.88],[12.9],[13],[13.16],[13.28,13.28],[13.46],[13.6],[13.62,13.62],[13.74],[13.82],[13.84],[13.9],[14.16],[14.18],[14.2],[14.22,14.22],[14.28],[14.76],[14.96],[15.02],[15.14],[15.18],[15.72],[15.92],[16.14],[16.32],[16.48],[17.12],[17.22],[17.28],[17.3],[17.34],[17.5],[17.52],[17.68],[17.82,17.82],[18.04],[18.1],[18.16],[18.18],[18.2],[18.24,18.24],[18.3,18.3],[18.32],[18.42],[18.54],[18.7],[18.82],[18.92],[19],[19.16],[19.24],[19.26,19.26],[19.3],[19.44],[19.52],[19.58],[19.7],[19.88],[19.92],[20.06],[20.1],[20.18],[20.26],[20.48],[20.5],[20.52,20.52],[20.68],[20.7],[20.78],[20.84],[20.86],[20.88],[20.96],[21.2],[21.24,21.24],[21.5,21.5],[21.56],[21.66],[21.7],[21.76],[21.8],[21.82],[21.92],[21.98],[22.1],[22.14],[22.62],[22.78],[22.98],[23.16],[23.28],[23.42],[23.48,23.48],[23.54],[23.58],[23.6,23.6],[23.62],[23.64],[23.66],[23.94],[24],[24.16],[24.22],[24.3],[24.38],[24.4],[24.44],[24.54],[24.76],[24.8],[24.86],[24.88],[24.96],[24.98],[25.08],[25.38],[25.5],[25.6],[25.84],[25.9],[25.92],[25.94],[26.02],[26.04,26.04,26.04],[26.1],[26.14],[26.18,26.18],[26.52],[26.58],[26.84],[26.9],[26.98],[27.04],[27.34],[27.44],[27.56],[27.58],[27.64],[27.7],[28.08],[28.18],[28.32],[28.38],[28.48],[28.7,28.7],[28.82],[28.9],[29.22],[29.26],[29.3,29.3],[29.48],[29.58],[29.64],[29.7],[30.04],[30.08],[30.18],[30.24],[30.4],[30.52],[30.82],[31],[31.1],[31.32],[31.48],[31.5],[31.52],[31.6],[31.78],[31.8],[31.82],[32.2],[32.28],[32.3],[32.5],[32.64],[32.68],[33.02],[33.1],[33.54],[33.6],[33.76],[33.84],[33.92],[33.96],[34.16],[34.24],[34.26],[34.28],[34.62],[34.7],[34.74],[34.78],[34.86],[35.14],[35.32],[35.48],[35.5],[35.56],[35.6],[35.62],[35.64],[35.74],[35.9],[36.02],[36.1],[36.16],[36.18],[36.24],[36.3],[36.68],[36.8],[36.82],[37.12],[37.16],[37.5],[37.62],[37.72],[38.06],[38.24],[38.28],[38.3],[38.46],[38.6],[38.72],[38.86],[38.88],[38.92],[39.1],[39.12],[39.42],[39.96],[40.28],[40.52,40.52],[40.72],[40.82],[40.92],[41.02],[41.14],[41.16],[41.2],[41.28],[41.46],[41.58],[41.6],[41.68],[41.94,41.94],[42.04],[42.26],[42.32],[42.68],[43.16],[43.18],[43.28],[43.36],[43.44],[43.46],[43.88],[43.94],[44.66],[45.02],[45.04],[45.34],[45.5],[45.84],[46.04],[46.14],[46.24],[46.42],[46.52],[46.54],[46.62],[46.72],[46.74],[46.78],[46.8],[46.82],[46.96],[47.02],[47.2],[47.26],[47.5,47.5],[47.68],[47.9,47.9],[47.92],[48.24],[48.28],[48.36],[48.4],[48.5],[48.74],[48.8],[49.12],[49.22],[49.34],[49.48],[49.5],[49.62],[50.08],[50.18],[50.3],[50.7],[50.94],[51.26],[51.28],[51.32],[51.58],[51.76],[51.8],[51.82],[52.1],[52.26],[52.3],[52.36],[52.58],[53.06],[53.14],[53.24],[53.76],[53.82],[53.84],[53.88],[53.92],[53.96],[54.28],[54.34],[54.38],[54.54],[54.62],[54.72],[54.76],[55.12],[55.42],[55.52],[55.96],[56.14],[56.16],[56.2],[56.24],[56.28],[56.52],[56.62],[56.86,56.86],[56.96],[57.26],[57.32],[57.36],[57.56],[57.78],[58.24],[58.3],[58.42],[58.58],[58.74],[58.82],[58.86],[58.9],[58.96],[59],[59.02],[59.12],[59.16],[59.38],[59.44],[59.58],[59.84],[59.92],[59.94],[59.96],[100]];
 var lightOrderBR=[37,26,16,25,25,10,11,28,26,22,6,22,40,4,12,38,2,6,16,28,11,20,12,36,15,4,30,34,38,10,21,25,39,15,16,5,33,10,18,20,4,4,2,9,35,28,22,2,40,6,31,19,36,28,25,14,15,24,18,17,32,25,34,6,29,19,6,23,10,19,39,36,11,40,32,25,15,12,6,16,35,35,38,1,19,34,25,21,12,40,18,10,1,36,8,11,18,11,19,33,19,22,40,5,19,31,14,1,32,34,23,35,29,15,25,11,40,19,32,19,18,38,32,27,3,21,40,30,6,15,5,12,31,29,29,30,32,34,7,29,18,2,28,6,25,14,8,27,17,33,8,26,13,17,30,8,25,26,14,13,17,30,3,8,14,17,5,34,10,4,6,6,20,9,22,30,11,34,24,39,2,1,8,12,13,13,24,30,38,9,37,3,30,11,18,19,9,14,21,24,33,3,3,33,24,4,11,16,33,24,33,1,21,26,33,1,30,16,33,6,39,36,24,24,9,22,19,15,34,22,24,36,14,16,20,4,32,19,36,38,11,32,26,14,6,20,27,34,38,19,22,8,21,29,39,3,30,22,30,9,29,17,3,12,7,10,40,7,34,24,5,13,17,13,5,13,36,18,5,27,27,25,10,38,32,19,25,33,28,27,5,1,31,20,32,6,31,25,14,38,21,7,32,39,20,14,4,39,1,11,20,7,21,37,25,5,14,30,8,14,26,38,29,29,23,38,5,10,25,28,34,8,21,5,8,39,9,2,21,17,15,32,4,22,32,5,15,17,4,8,11,34,32,40,10,28,31,23,2,17,33,22,15,7,29,11,30,13,38,1,17,32,8,30,25,3,33,21,26,17,2,15,7,30,14,11,22,1,33,7,16,26,16,31,36,8,6,36,19,20,36,39,13,18,27,31,37,1,18,36,7,38,7,7,24,34,27,28,10,15,18,9,9,20,32,38,3,19,37,29,38,24,18,29,31,20,3,29,34,25,1,32,22,29,36,32,28,11,12,9,36,15,12,14,13,21,30,39,12,36,8,5,29,13,4,20,28,1,25,13,24,39,29,8,25,30,18,3,28,29,28,1]; 
 var eTimesBR=[[0.08],[0.1],[0.32,0.32],[0.34],[0.36],[0.58],[0.6],[0.7],[0.76],[0.92],[1.02],[1.34],[1.4],[1.52],[1.94],[2],[2.1],[2.12],[2.28],[2.3],[3.42],[3.78],[4.12],[4.22],[4.32],[4.34],[4.38],[4.64],[4.84],[4.88],[4.96,4.96],[5.04],[5.08],[5.14],[5.2],[5.34],[5.38],[5.62],[5.7],[5.82],[5.84],[5.88,5.88],[5.9],[5.92],[6.04],[6.18],[6.2],[6.28],[6.34],[6.74],[6.82],[7.04],[7.1],[7.16],[7.5],[7.56],[7.74],[7.78],[8.02],[8.24],[8.56],[8.62],[8.7],[8.78],[8.88],[8.98],[9],[9.04],[9.14],[9.3],[10.14],[10.24],[10.38],[10.58],[10.74],[10.84],[11.18],[11.4],[11.76,11.76],[11.78],[11.84],[12.04],[12.16],[12.24],[12.28],[12.34],[12.72],[12.76],[12.86],[13.08],[13.28,13.28],[13.54],[13.64],[13.66],[13.7],[13.78],[13.88,13.88],[14],[14.3],[14.34],[14.6],[14.76],[14.9],[15.06],[15.36],[15.54],[15.56],[15.58],[15.74],[16.06],[16.16],[16.48],[16.5],[16.56],[16.58],[16.68],[16.7],[16.72],[16.76],[17.24],[17.38],[17.4],[17.44],[17.46],[17.48],[17.68],[17.7],[17.78],[17.92],[18.08],[18.12],[18.2],[18.32,18.32],[18.56],[18.68],[18.82],[19.06],[19.12],[19.16],[19.2,19.2],[19.24],[19.38],[19.52],[19.62],[19.64],[19.78],[19.9],[20.28],[20.36,20.36],[20.4],[20.64],[20.76,20.76],[20.86,20.86],[21.28],[21.4],[21.44],[21.6],[21.68],[21.7],[21.96],[22.1],[22.18],[22.26],[22.48],[22.72],[22.82,22.82],[22.96],[23.06],[23.44],[23.52,23.52],[23.66],[23.92],[24.4,24.4],[24.5],[24.6],[24.78],[24.88],[24.98],[25.04],[25.12],[25.36],[25.6],[25.66],[25.74],[25.98],[26.2,26.2],[26.3,26.3],[26.52],[26.62],[26.92],[26.94],[26.96],[27.08],[27.1],[27.14],[27.18],[27.24],[27.38,27.38],[27.5],[27.7],[27.74],[28.06],[28.1,28.1],[28.16],[28.18,28.18],[28.32],[28.4],[28.98],[29.02,29.02],[29.2],[29.28],[29.8],[30.28],[30.32],[30.4],[30.64],[30.84],[31.3,31.3],[31.36],[31.48],[31.54],[31.56],[31.58],[31.6],[31.84],[31.86],[32],[32.2],[32.42,32.42],[32.6],[32.78],[32.94],[32.98],[33.1],[33.32],[33.36,33.36],[33.38],[33.44],[33.54],[33.7],[33.96],[34],[34.12],[34.22],[34.34],[34.78],[34.94],[35.02],[35.06],[35.32],[35.34],[35.62],[35.72],[35.84],[35.92],[36.1],[36.26],[36.34],[36.4],[36.42],[36.44],[36.62],[36.78],[36.92],[37.14],[37.16],[37.18],[37.32],[37.4,37.4],[37.72],[37.74],[37.88],[38.34],[38.48],[38.54,38.54],[38.56],[38.9],[38.96],[38.98],[39.16],[39.26],[39.34],[39.4],[39.48],[39.7],[39.96],[40.1],[40.16],[40.86],[40.9],[41.08],[41.16],[41.22],[41.28,41.28],[41.56],[41.72],[41.74],[41.78],[41.94],[42.04],[42.22],[42.26],[42.3],[42.62],[42.72],[42.74],[42.84],[42.88],[43.02],[43.1],[43.22],[43.98],[44.1],[44.18],[44.24],[44.48],[44.52],[44.54],[44.74],[44.86],[44.94],[45.08],[45.1],[45.12],[45.6],[45.66],[45.68,45.68],[46.06],[46.22],[46.36],[46.56],[46.6],[46.68],[46.74],[46.96],[47.08],[47.18],[47.38],[47.42],[47.46],[47.5],[47.52],[47.68],[47.94],[47.98],[48.16],[48.38],[48.58],[48.7],[48.9],[49.22],[49.24],[49.28],[49.42],[49.54],[49.68,49.68],[49.7],[49.74],[49.8],[50.02],[50.08],[50.24],[50.26],[50.5],[50.62,50.62],[50.68],[50.74],[50.9],[50.94],[51.3],[51.5],[51.6],[51.68],[51.88],[51.94,51.94],[52.18],[52.2],[52.4],[52.52],[52.54],[52.56],[52.62],[52.94],[52.96],[53.36],[53.38],[53.52],[53.66],[53.84],[53.86],[53.94],[53.96],[54.06],[54.08,54.08,54.08],[54.22],[54.58],[54.72],[54.78],[54.82],[54.92],[55.04],[55.08],[55.38],[55.72],[55.8],[56.12],[56.36],[56.48],[56.5,56.5],[56.52,56.52],[56.54],[56.56],[56.62],[56.68],[56.92],[57.12],[57.16],[57.3],[57.32],[57.36],[57.54],[57.66],[57.72],[57.74],[57.78],[57.94],[57.98],[58.14],[58.16],[58.38],[58.46],[58.54,58.54],[58.58],[58.62],[58.64],[58.66],[58.68],[58.82],[58.98],[59],[59.06],[59.14],[59.28],[59.44],[59.54],[59.98],[100]];