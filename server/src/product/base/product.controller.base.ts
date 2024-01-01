/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ProductService } from "../product.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProductCreateInput } from "./ProductCreateInput";
import { Product } from "./Product";
import { ProductFindManyArgs } from "./ProductFindManyArgs";
import { ProductWhereUniqueInput } from "./ProductWhereUniqueInput";
import { ProductUpdateInput } from "./ProductUpdateInput";
import { CategoryFindManyArgs } from "../../category/base/CategoryFindManyArgs";
import { Category } from "../../category/base/Category";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { ReviewWhereUniqueInput } from "../../review/base/ReviewWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProductControllerBase {
  constructor(
    protected readonly service: ProductService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Product })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProduct(
    @common.Body() data: ProductCreateInput
  ): Promise<Product> {
    return await this.service.createProduct({
      data: {
        ...data,

        order: data.order
          ? {
              connect: data.order,
            }
          : undefined,
      },
      select: {
        colors: true,
        createdAt: true,
        description: true,
        discountedPrice: true,
        id: true,
        images: true,

        order: {
          select: {
            id: true,
          },
        },

        title: true,
        titlePrice: true,
        updatedAt: true,
        variants: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Product] })
  @ApiNestedQuery(ProductFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async products(@common.Req() request: Request): Promise<Product[]> {
    const args = plainToClass(ProductFindManyArgs, request.query);
    return this.service.products({
      ...args,
      select: {
        colors: true,
        createdAt: true,
        description: true,
        discountedPrice: true,
        id: true,
        images: true,

        order: {
          select: {
            id: true,
          },
        },

        title: true,
        titlePrice: true,
        updatedAt: true,
        variants: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async product(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    const result = await this.service.product({
      where: params,
      select: {
        colors: true,
        createdAt: true,
        description: true,
        discountedPrice: true,
        id: true,
        images: true,

        order: {
          select: {
            id: true,
          },
        },

        title: true,
        titlePrice: true,
        updatedAt: true,
        variants: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProduct(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() data: ProductUpdateInput
  ): Promise<Product | null> {
    try {
      return await this.service.updateProduct({
        where: params,
        data: {
          ...data,

          order: data.order
            ? {
                connect: data.order,
              }
            : undefined,
        },
        select: {
          colors: true,
          createdAt: true,
          description: true,
          discountedPrice: true,
          id: true,
          images: true,

          order: {
            select: {
              id: true,
            },
          },

          title: true,
          titlePrice: true,
          updatedAt: true,
          variants: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Product })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProduct(
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Product | null> {
    try {
      return await this.service.deleteProduct({
        where: params,
        select: {
          colors: true,
          createdAt: true,
          description: true,
          discountedPrice: true,
          id: true,
          images: true,

          order: {
            select: {
              id: true,
            },
          },

          title: true,
          titlePrice: true,
          updatedAt: true,
          variants: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/categories")
  @ApiNestedQuery(CategoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async findCategories(
    @common.Req() request: Request,
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Category[]> {
    const query = plainToClass(CategoryFindManyArgs, request.query);
    const results = await this.service.findCategories(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/categories")
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  async connectCategories(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: CategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      categories: {
        connect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/categories")
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  async updateCategories(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: CategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      categories: {
        set: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/categories")
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  async disconnectCategories(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: CategoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      categories: {
        disconnect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/reviews")
  @ApiNestedQuery(ReviewFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async findReviews(
    @common.Req() request: Request,
    @common.Param() params: ProductWhereUniqueInput
  ): Promise<Review[]> {
    const query = plainToClass(ReviewFindManyArgs, request.query);
    const results = await this.service.findReviews(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        product: {
          select: {
            id: true,
          },
        },

        rating: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/reviews")
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  async connectReviews(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        connect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/reviews")
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  async updateReviews(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        set: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/reviews")
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "update",
    possession: "any",
  })
  async disconnectReviews(
    @common.Param() params: ProductWhereUniqueInput,
    @common.Body() body: ReviewWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      reviews: {
        disconnect: body,
      },
    };
    await this.service.updateProduct({
      where: params,
      data,
      select: { id: true },
    });
  }
}
