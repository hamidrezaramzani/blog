import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading/Loading';
import { QueryClient, QueryClientProvider } from 'react-query'
import UserProvider from './context/UserProvider';
import BlogContentProvider from './context/BlogContentProvider';
import PrivateRoute from './components/PrivateRoute';
const Home = lazy(() => import('./components/Home/Home'))
const Login = lazy(() => import('./components/Admin/Login'))
const Dashboard = lazy(() => import('./components/Admin/Dashboard'))
const NewBlog = lazy(() => import('./components/Admin/Blog/New'))
const ManageBlogs = lazy(() => import('./components/Admin/Blog/Manage'))

function App() {
    const queryClient = new QueryClient();

    return (
        <UserProvider>
            <BlogContentProvider>
                <QueryClientProvider client={queryClient}>
                    <Suspense fallback={<Loading />}>
                        <BrowserRouter>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/admin/login" component={Login} />
                                <PrivateRoute path="/admin/dashboard" component={Dashboard} />
                                <PrivateRoute path="/blog/new" component={NewBlog} />
                                <PrivateRoute path="/blog/manage" component={ManageBlogs} />
                            </Switch>
                        </BrowserRouter>
                    </Suspense>
                </QueryClientProvider>
            </BlogContentProvider>
        </UserProvider>
    );
}

export default App;
