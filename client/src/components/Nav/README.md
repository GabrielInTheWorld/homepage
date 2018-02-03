##Navigationbar

######Here are components for navigationbar-menus
How to use it:

- NavigationBar.jsx as parent
- Nav.jsx as item to lead to a URL
- NavContainer.jsx to setup a subfolder for items under a specified subject

like:
<code>
    <Navigationbar>
        <Nav id="nav1" to="/home" text="@Home" />
        <NavContainer id="container1">
            <Nav id="navsub1" to="/heroes" text="undetected Heroes" />
        </NavContainer>
    </Navigationbar>
</code>