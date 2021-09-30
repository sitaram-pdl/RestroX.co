import React, { lazy, Suspense } from "react";
import styles from "./App.module.css";
import { Switch, Route, useLocation } from "react-router-dom";
import "@material-tailwind/react/tailwind.css";
import cx from "classnames";
import Review from "./Components/Review/Review";
import { RightRestro, AddExpense, AddModal } from "./Components";
import TableBill from "./Components/TableBill/TableBill";
import Messages from "./Components/Messages/Messages";
import Backdrop from "./Components/Backdrop/Backdrop";
import Account from "./Components/Account/RestroMenu";
import User from "./Components/User/RestroMenu";
import Notes from "./Components/Notes/Notes";
import Login from "./Components/Login/Login";
import Main from "./Components/Login/Main";
import RestroModal from "./Components/RestroModal/Modal";
import NotesNavigate from "./Components/NotesNavigate/NotesNavigate";
import "./styles/global.css";

const LazyHome = lazy(() => import("./Components/Home/Home"));

const LazyOrder = lazy(() => import("./Components/Home/Order"));
const LazyMenu = lazy(() => import("./Components/RestroMenu/RestroMenu"));
const LazyAdd = lazy(() => import("./Components/AddFood/AddFood"));
const NavBar = lazy(() => import("./Components/NavBar/NavBar"));
const Employee = lazy(() => import("./Components/Employee/Employee"));
const Promotions = lazy(() => import("./Components/Promotions/Promotions"));
const Settings = lazy(() => import("./Components/Settings/Settings"));
const Top = lazy(() => import("./Components/Profile/Profile"));
const Management = lazy(() => import("./Components/Management/Settings"));
const Buy = lazy(() => import("./Components/Buy1Get1/Buy"));
const Profile = lazy(() => import("./Components/ProfileDesc/ProfileDesc"));

class App extends React.Component {
  state = {
    theme: false,
    marginIndex: true,
    modal: "",
  };
  componentDidMount() {
    this.setState({
      theme: localStorage.getItem("theme") == "true" ? true : false,
    });
  }

  themeSwitch = (a) => {
    this.setState({ theme: !a });
    localStorage.setItem("theme", !a);
  };
  enterHandle = () => {
    this.setState({ marginIndex: true });
  };
  leaveHandle = () => {
    this.setState({ marginIndex: false });
  };
  modalHandle = (a) => {
    this.setState({ modal: a });
  };
  closeModal = () => {
    this.setState({ modal: "" });
  };
  ModalRender = () => {
    switch (this.state.modal) {
      case "Add Expense":
        return <AddExpense {...this.props} />;

      case "Add Order":
        return <AddModal {...this.props} />;

      case "Add Notes":
        return <Notes />;

      case "Restro Menu":
        return <RestroModal />;
    }
  };
  render() {
    const { theme, marginIndex } = this.state;
    return (
      <div className={cx(styles.container, theme ? styles.white : null)}>
        <Suspense fallback={<div />}>
          <NavBar
            location={window.location}
            enterHandle={this.enterHandle}
            leaveHandle={this.leaveHandle}
            theme={theme}
            onSwitch={this.themeSwitch}
            modalHandle={this.modalHandle}
          />
        </Suspense>
        <Suspense fallback={<div />}>
          <Top theme={theme} {...this.props} modalHandle={this.modalHandle} />
        </Suspense>
        {this.state.modal ? (
          <div className={styles.modals}>
            <Backdrop {...this.props} clicked={this.closeModal} />
            {this.ModalRender()}
          </div>
        ) : null}
        <div
          className={cx(
            styles.rightContainer,
            marginIndex ? styles.marginIndex : null
          )}
        >
          <Suspense fallback={<div />}>
            <Switch>
              <Route
                path="/overview"
                exact
                render={(props) => (
                  <LazyHome theme={theme} {...props} where="Home" />
                )}
              />

              <Route
                path="/login"
                exact
                render={(props) => <Login theme={theme} {...props} />}
              />
              <Route
                path="/Notes"
                exact
                render={(props) => <NotesNavigate theme={theme} {...props} />}
              />
              <Route
                path="/loginRegister"
                exact
                render={(props) => <Main theme={theme} {...props} />}
              />

              <Route
                path="/"
                exact
                render={(props) => (
                  <LazyOrder theme={theme} {...props} where="Table" />
                )}
              />
              <Route
                path="/restro"
                exact
                render={(props) => <LazyMenu theme={theme} {...props} />}
              />
              <Route
                path="/addOrder/:tableName"
                exact
                render={(props) => <LazyAdd theme={theme} {...props} />}
              />
              <Route
                path="/Order/:tableName"
                exact
                render={(props) => <TableBill theme={theme} {...props} />}
              />

              <Route
                path="/employee"
                exact
                render={(props) => <Employee theme={theme} {...props} />}
              />
              <Route
                path="/user"
                exact
                render={(props) => <User theme={theme} {...props} />}
              />
              <Route
                path="/promotion"
                exact
                render={(props) => <Promotions theme={theme} {...props} />}
              />
              <Route
                path="/promotion/buy1get1"
                exact
                render={(props) => <Buy theme={theme} {...props} />}
              />
              <Route
                path="/settings/:main/:sub/:last"
                exact
                render={(props) => (
                  <Settings
                    theme={theme}
                    onSwitch={this.themeSwitch}
                    {...props}
                  />
                )}
              />
              <Route
                path="/management/:main/:sub/:last"
                exact
                render={(props) => <Management theme={theme} {...props} />}
              />

              <Route
                path="/profile/:id"
                exact
                render={(props) => <Profile theme={theme} {...props} />}
              />
              <Route
                path="/review"
                exact
                render={(props) => <Review theme={theme} {...props} />}
              />
              <Route
                path="/review"
                exact
                render={(props) => <Review theme={theme} {...props} />}
              />
              <Route
                path="/account"
                exact
                render={(props) => <Account theme={theme} {...props} />}
              />
              <Route
                path="/messages"
                exact
                render={(props) => <Messages theme={theme} {...props} />}
              />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}

export default App;
