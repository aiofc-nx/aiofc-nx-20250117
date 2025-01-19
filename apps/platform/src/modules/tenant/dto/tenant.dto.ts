import { z } from 'zod';

export const createTenantSchema = z.object({
  name: z
    .string()
    .min(2, '租户名称至少需要2个字符')
    .max(100, '租户名称不能超过100个字符'),
  schema: z
    .string()
    .min(10, '租户Schema标识至少需要10个字符')
    .max(20, '租户Schema标识不能超过20个字符')
    .regex(
      /^t_[a-zA-Z0-9_]+$/,
      '租户Schema标识必须以"t_"开头，且只能包含字母、数字和下划线',
    ),
  description: z.string().optional(),
});

export type CreateTenantDto = z.infer<typeof createTenantSchema>;

export const updateTenantSchema = createTenantSchema.partial();
export type UpdateTenantDto = z.infer<typeof updateTenantSchema>;
