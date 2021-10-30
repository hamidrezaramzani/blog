import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading/Loading';
import { QueryClient, QueryClientProvider } from 'react-query'
import UserProvider from './context/UserProvider';
const Home = lazy(() => import('./components/Home/Home'))
const Login = lazy(() => import('./components/Admin/Login'))
function App() {
    const queryClient = new QueryClient();

    return (
        <UserProvider>
            <QueryClientProvider client={queryClient}>
                <Suspense fallback={<Loading />}>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/admin/login" component={Login} />
                        </Switch>
                    </BrowserRouter>
                </Suspense>
            </QueryClientProvider>
        </UserProvider>
    );
}

export default App;
