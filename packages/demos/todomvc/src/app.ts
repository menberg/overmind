import App, {
  TConnect,
  TModule,
  TAction,
  TOperation,
  TDerive,
  TCompute,
} from 'react-overmind'
import * as main from './main'

type Module = TModule<typeof main>

export type Action<Value = void> = TAction<Value, Module>
export type Derive = TDerive<Module>
export type Compute<Value> = TCompute<Value, Module>
export type Mutation<Value = any> = TOperation.Mutation<Value, Module>
export type Do<Value = any> = TOperation.Do<Value, Module>
export type Filter<Value = any> = TOperation.Filter<Value, Module>
export type When<Value = any> = TOperation.When<Value, Module>
export type Fork<Value = any> = TOperation.Fork<Value, Module>
export type Map<Value, ReturnValue> = TOperation.Map<Value, ReturnValue, Module>
export type Try<Value, ReturnValue> = TOperation.Try<Value, ReturnValue, Module>

const app = new App(main, {
  devtools: 'localhost:1234',
})

export type Connect = TConnect<typeof app>

export const connect = app.connect

export default app
