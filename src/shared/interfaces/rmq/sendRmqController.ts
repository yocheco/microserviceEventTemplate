export interface ISendController<T>{
  reciveRMQ: ({ data } : {data: T}) => Promise<boolean>
}
