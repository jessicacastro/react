export const ModuleLoadingWithRedux = () => (
  <div className="shadow rounded-md p-6 animate-pulse ">
    <div className="flex space-x-4">
      <div className="rounded-full bg-slate-700 h-10 w-10"></div>
      <div className="flex-1 space-y-3">
        <div className="h-2 bg-slate-700 rounded"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
          </div>
        </div>
      </div>
    {
      Array.from({ length: 6 }).map((_, index) => (
      <div key={`module-item-loading-${index}`} className="mt-4 grid grid-cols-6 items-center">
        <div className="h-2 bg-slate-700 rounded col-span-4"></div>
        <div className="h-2 rounded col-span-1"></div>
        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
      </div>
      ))
    }

  </div>
)