const PageHeader = ({ PageName }) => {
    return (
        <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-bold text-blue-500 mb-4">
                    {PageName}
                </h1>
            </div>
        </header>
    );
}

export default PageHeader;