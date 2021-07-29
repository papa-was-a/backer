import {
  Model,
  DataTypes,
  Optional
} from 'sequelize'
import seq from '../seq'

// sequelize+typescript 参考文档
// https://sequelize.org/master/manual/typescript.html

// model类型
export interface UserModel {
  id: number
  name: string
  age: number
  city: string
  email: string
  address: string
}

interface UserAttributes extends Optional<UserModel, "id"> {}

// Model实例接口
interface UserInstance extends Model<UserModel, UserAttributes>, UserModel {}


// 创建 User 模型  数据表的名字是 User
const User = seq.define<UserInstance>('user', {
  // id会自动创建 并设为主键、自增
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '姓名'
  },
  age: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '年龄'
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '城市'
  },
  email: {
    type: DataTypes.STRING,
    comment: '邮箱'
  },
  address: {
    type: DataTypes.STRING,
    comment: '地址'
  }
})

export default User