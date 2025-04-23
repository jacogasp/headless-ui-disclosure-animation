import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

export default function Drawer() {
  return (
    <Disclosure defaultOpen>
      <header className="fixed inset-0 h-16 bg-slate-200">
        <DisclosureButton className="bg-slate-400 p-2 rounded hover:bg-slate-300">
          Open/Close
        </DisclosureButton>
        <DisclosurePanel
          transition
          className="bg-slate-200 fixed inset-0 w-80 mt-16 easy-in-out data-[closed]:-translate-x-full data-[closed]:bg-red-300 duration-2000"
        >
          Hello
        </DisclosurePanel>
      </header>
    </Disclosure>
  )
}
