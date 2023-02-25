// This file was generated by RedwoodJS
import { RouteParams, QueryParams } from '@redwoodjs/router'
import { A } from 'ts-toolbelt'


declare module '@redwoodjs/router' {
  interface AvailableRoutes {
    // Only "<Route />" components with a "name" and "path" prop will be populated here.
    userBalance: (params?: RouteParams<"/user-balance"> & QueryParams) => "/user-balance"
    newPost: (params?: RouteParams<"/posts/new"> & QueryParams) => "/posts/new"
    editPost: (params?: RouteParams<"/posts/{id:Int}/edit"> & QueryParams) => "/posts/{id:Int}/edit"
    post: (params?: RouteParams<"/posts/{id:Int}"> & QueryParams) => "/posts/{id:Int}"
    posts: (params?: RouteParams<"/posts"> & QueryParams) => "/posts"
  }
}

