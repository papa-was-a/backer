import {
  Model,
  DataTypes,
  Optional
} from 'sequelize'
import seq from '../seq'

// sequelize+typescript 参考文档
// https://sequelize.org/master/manual/typescript.html

// model类型
export interface ErrorLogModel {
  id: number
  request_url: string
  request_data: string
  request_header: string
  method: string
}

interface ErrorLogAttributes extends Optional<ErrorLogModel, "id"> {}

// Model实例接口
interface ErrorLogInstance extends Model<ErrorLogModel, ErrorLogAttributes>, ErrorLogModel {}


// 创建 ErrorLog 模型  数据表的名字是 ErrorLog
const ErrorLog = seq.define<ErrorLogInstance>('ErrorLog', {
  // id会自动创建 并设为主键、自增
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true
  },
  request_url: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '请求地址'
  },
  request_data: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '请求数据'
  },
  request_header: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '请求头'
  },
  method: {
    type: DataTypes.STRING,
    comment: '请求方法'
  }
})

export default ErrorLog