const SideBarNavigationIcon = ({ icon, text = 'tooltip 💡', onClick }) => {
    return (
        <div
            className='drawer-icon group'
            onClick={onClick}
        >
            {icon}
            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    );
};

export default SideBarNavigationIcon;
