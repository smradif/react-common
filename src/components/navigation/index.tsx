import React, { lazy, Suspense } from "react";
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from "react-bootstrap";
import { Route, Switch } from "react-router";
import CustomErrorBoundary from "../error-boundary";
import './styles.css';

const HomePage = lazy(() => import('../../pages/home'));
const WizardPage = lazy(() => import('../../pages/wizard'));
const DialogsPage = lazy(() => import('../../pages/dialogs'));
const PerformancePage = lazy(() => import('../../pages/performance'))

const NavigationLinks = (props: any) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CustomErrorBoundary key={props.location?.pathname}>
                <div className="content">
                    <Route exact path="/" component={HomePage} />
                    <Route path="/wizard" component={WizardPage} />
                    <Route path="/dialogs/:type" component={DialogsPage} />
                    <Route path="/performance/:type" component={PerformancePage} />
                </div>
            </CustomErrorBoundary>
        </Suspense>
    );
}
const NavigationComponent = (props: any) => {
    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="/">React-Common</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/wizard">Wizard</Nav.Link>
                        <NavDropdown title="Dialogs" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/dialogs/mobx">Mobx Driven Dialogs</NavDropdown.Item>
                            <NavDropdown.Item href="/dialogs/redux">Redux Driven Dialogs</NavDropdown.Item>
                            <NavDropdown.Item href="/dialogs/hooks">Hooks Driven Dialogs</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/dialogs/notfound">Not Found Error</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Performance" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/performance/intersection">Intersection Observer</NavDropdown.Item>
                            <NavDropdown.Item href="/performance/virtualized">Virtualizations</NavDropdown.Item>
                            <NavDropdown.Item href="/performance/infinite">Virtualizations + Infinite Scrolling</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <NavigationLinks {...props}></NavigationLinks>
            </Switch>
        </>
    );
}
export default NavigationComponent;