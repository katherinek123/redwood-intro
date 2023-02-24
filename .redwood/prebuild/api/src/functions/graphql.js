import { createGraphQLHandler } from '@redwoodjs/graphql-server';
let directives = {};
import * as directives_requireAuth_requireAuth from "../directives/requireAuth/requireAuth";
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
import * as directives_skipAuth_skipAuth from "../directives/skipAuth/skipAuth";
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
import * as sdls_posts_sdl from "../graphql/posts.sdl";
sdls.posts_sdl = sdls_posts_sdl;
let services = {};
import * as services_posts_posts from "../services/posts/posts";
services.posts_posts = services_posts_posts;
import { db } from "../lib/db";
import { logger } from "../lib/logger";
export const handler = createGraphQLHandler({
  loggerConfig: {
    logger,
    options: {}
  },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect();
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVHcmFwaFFMSGFuZGxlciIsImRpcmVjdGl2ZXMiLCJkaXJlY3RpdmVzX3JlcXVpcmVBdXRoX3JlcXVpcmVBdXRoIiwicmVxdWlyZUF1dGhfcmVxdWlyZUF1dGgiLCJkaXJlY3RpdmVzX3NraXBBdXRoX3NraXBBdXRoIiwic2tpcEF1dGhfc2tpcEF1dGgiLCJzZGxzIiwic2Rsc19wb3N0c19zZGwiLCJwb3N0c19zZGwiLCJzZXJ2aWNlcyIsInNlcnZpY2VzX3Bvc3RzX3Bvc3RzIiwicG9zdHNfcG9zdHMiLCJkYiIsImxvZ2dlciIsImhhbmRsZXIiLCJsb2dnZXJDb25maWciLCJvcHRpb25zIiwib25FeGNlcHRpb24iLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwaS9zcmMvZnVuY3Rpb25zL2dyYXBocWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR3JhcGhRTEhhbmRsZXIgfSBmcm9tICdAcmVkd29vZGpzL2dyYXBocWwtc2VydmVyJ1xuXG5pbXBvcnQgZGlyZWN0aXZlcyBmcm9tICdzcmMvZGlyZWN0aXZlcy8qKi8qLntqcyx0c30nXG5pbXBvcnQgc2RscyBmcm9tICdzcmMvZ3JhcGhxbC8qKi8qLnNkbC57anMsdHN9J1xuaW1wb3J0IHNlcnZpY2VzIGZyb20gJ3NyYy9zZXJ2aWNlcy8qKi8qLntqcyx0c30nXG5cbmltcG9ydCB7IGRiIH0gZnJvbSAnc3JjL2xpYi9kYidcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3NyYy9saWIvbG9nZ2VyJ1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZUdyYXBoUUxIYW5kbGVyKHtcbiAgbG9nZ2VyQ29uZmlnOiB7IGxvZ2dlciwgb3B0aW9uczoge30gfSxcbiAgZGlyZWN0aXZlcyxcbiAgc2RscyxcbiAgc2VydmljZXMsXG4gIG9uRXhjZXB0aW9uOiAoKSA9PiB7XG4gICAgLy8gRGlzY29ubmVjdCBmcm9tIHlvdXIgZGF0YWJhc2Ugd2l0aCBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgIGRiLiRkaXNjb25uZWN0KClcbiAgfSxcbn0pXG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLG9CQUFvQixRQUFRLDJCQUEyQjtBQUFBLElBQUFDLFVBQUE7QUFBQSxZQUFBQyxrQ0FBQTtBQUFBRCxVQUFBLENBQUFFLHVCQUFBLEdBQUFELGtDQUFBO0FBQUEsWUFBQUUsNEJBQUE7QUFBQUgsVUFBQSxDQUFBSSxpQkFBQSxHQUFBRCw0QkFBQTtBQUFBLElBQUFFLElBQUE7QUFBQSxZQUFBQyxjQUFBO0FBQUFELElBQUEsQ0FBQUUsU0FBQSxHQUFBRCxjQUFBO0FBQUEsSUFBQUUsUUFBQTtBQUFBLFlBQUFDLG9CQUFBO0FBQUFELFFBQUEsQ0FBQUUsV0FBQSxHQUFBRCxvQkFBQTtBQU1oRSxTQUFTRSxFQUFFO0FBQ1gsU0FBU0MsTUFBTTtBQUVmLE9BQU8sTUFBTUMsT0FBTyxHQUFHZCxvQkFBb0IsQ0FBQztFQUMxQ2UsWUFBWSxFQUFFO0lBQUVGLE1BQU07SUFBRUcsT0FBTyxFQUFFLENBQUM7RUFBRSxDQUFDO0VBQ3JDZixVQUFVO0VBQ1ZLLElBQUk7RUFDSkcsUUFBUTtFQUNSUSxXQUFXLEVBQUVBLENBQUEsS0FBTTtJQUNqQjtJQUNBTCxFQUFFLENBQUNNLFdBQVcsRUFBRTtFQUNsQjtBQUNGLENBQUMsQ0FBQyJ9