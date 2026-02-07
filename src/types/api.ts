/**
 * API types for Personal Finance & Investment Dashboard.
 * Single source of truth - matches backend implementation.
 *
 * @see docs/BACKEND_PHASE1_IMPLEMENTATION.md
 */

// ============================================================================
// Accounts
// ============================================================================

export type AccountType = 'checking' | 'savings' | 'investment';

export interface Account {
  id: string;
  userId: string;
  name: string;
  type: AccountType;
  balance: string; // decimal as string - use Number() for math
  currency: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAccountDto {
  name: string;
  type: AccountType;
  balance?: number;
  currency?: string;
}

export type UpdateAccountDto = Partial<CreateAccountDto>;

// ============================================================================
// Transactions
// ============================================================================

export interface Transaction {
  id: string;
  userId: string;
  accountId: string;
  amount: string; // decimal as string - positive = income, negative = expense
  description: string;
  date: string; // YYYY-MM-DD
  category?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTransactionDto {
  accountId: string;
  amount: number;
  description: string;
  date: string;
  category?: string;
}

export type UpdateTransactionDto = Partial<CreateTransactionDto>;

// ============================================================================
// Strategies
// ============================================================================

export type StrategyRiskLevel = 'low' | 'medium' | 'high';
export type StrategyStatus = 'active' | 'paused' | 'completed';

export interface Strategy {
  id: string;
  userId: string;
  name: string;
  description?: string | null;
  amount: string; // decimal as string
  riskLevel: StrategyRiskLevel;
  startDate: string;
  status: StrategyStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CreateStrategyDto {
  name: string;
  description?: string;
  amount: number;
  riskLevel: StrategyRiskLevel;
  startDate: string;
}

export interface UpdateStrategyDto extends Partial<CreateStrategyDto> {
  status?: StrategyStatus;
}

// ============================================================================
// Dashboard
// ============================================================================

export interface DashboardSummary {
  totalBalance: number;
  accountsCount: number;
  transactionsCount: number;
  strategiesCount: number;
  recentTransactions: Transaction[];
  recentStrategies: Strategy[];
}

// ============================================================================
// API Query Params
// ============================================================================

export interface TransactionsQueryParams {
  accountId?: string;
  limit?: number;
  offset?: number;
}
