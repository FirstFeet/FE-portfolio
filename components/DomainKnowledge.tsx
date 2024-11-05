function DomainKnowledge(props: any) {

    let {selectedDomain ,itemRemoved} = props

  return ( 
        <>
            <div id="default-modal" aria-hidden="true" className="fixed top-0 right-0 left-50 z-50 justify-center items-center max-w-full">
                <div className="relative p-4 w-full max-w-full max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {selectedDomain?.head}
                            </h3>
                            <button onClick={itemRemoved} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="overflow-y-auto max-h-screen pb-32 pt-10 px-20 space-y-4">
                            <p className="font-extrabold text-lg leading-relaxed text-amber-900">
                                Description:
                            </p>
                            <p className="leading-relaxed text-black pb-5 text-sm sm:text-base">
                                {selectedDomain?.description}
                            </p>
                            <p className="font-extrabold text-lg leading-relaxed text-amber-900">
                                Work-Flow:
                            </p>
                            <ul >
                            {selectedDomain?.workFlow?.map((value: any) => {
                                return (
                                    <li className="pb-2 text-sm sm:pb-5 sm:text-base"><span dangerouslySetInnerHTML={{__html: value}} /></li>
                                )
                            })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default DomainKnowledge