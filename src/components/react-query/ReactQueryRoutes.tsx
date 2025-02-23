import { Route, Routes } from "react-router-dom";
import BasicDataFetching from "./BasicDataFetching";
import CombiningWithStateManagement from "./CombiningWithStateManagement";
import CreatingCustomHooks from "./CreatingCustomHooks";
import CustomQueryFunctions from "./CustomQueryFunctions";
import DynamicQueries from "./DynamicQueries";
import ErrorHandling from "./ErrorHandling";
import HandlingLoadingAndErrorStates from "./HandlingLoadingAndErrorStates";
import HydrationForSSR from "./HydrationForSSR";
import InfiniteScrolling from "./InfiniteScrolling";
import IntegrationWithAxios from "./IntegrationWithAxios";
import Mutations from "./Mutations";
import OptimisticUpdates from "./OptimisticUpdates";
import PerformanceOptimization from "./PerformanceOptimization";
import QueryCaching from "./QueryCaching";
import QueryInvalidation from "./QueryInvalidation";
import ReactQueryDevTools from "./ReactQueryDevTools";
import UsingTypeScript from "./UsingTypeScript";
import Pagination from "./Pagination";

export const ReactQueryRoutes = () => {
  return (
    <Routes>
      <Route index path="" element={<p>Index</p>} />
      <Route path="basic-data-fetching" element={<BasicDataFetching />} />
      <Route path="combining-with-state-management" element={<CombiningWithStateManagement />} />
      <Route path="creating-custom-hooks" element={<CreatingCustomHooks />} />
      <Route path="custom-query-functions" element={<CustomQueryFunctions />} />
      <Route path="dynamic-queries" element={<DynamicQueries />} />
      <Route path="error-handling" element={<ErrorHandling />} />
      <Route path="handling-loading-and-error-states" element={<HandlingLoadingAndErrorStates />} />
      <Route path="hydration-for-ssr" element={<HydrationForSSR />} />
      <Route path="infinite-scrolling" element={<InfiniteScrolling />} />
      <Route path="integration-with-axios" element={<IntegrationWithAxios />} />
      <Route path="mutations" element={<Mutations />} />
      <Route path="optimistic-updates" element={<OptimisticUpdates />} />
      <Route path="pagination" element={<Pagination />} />
      <Route path="performance-optimization" element={<PerformanceOptimization />} />
      <Route path="query-caching" element={<QueryCaching />} />
      <Route path="query-invalidation" element={<QueryInvalidation />} />
      <Route path="react-query-dev-tools" element={<ReactQueryDevTools />} />
      <Route path="using-typescript" element={<UsingTypeScript />} />
    </Routes>
  );
};
